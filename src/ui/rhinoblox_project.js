import * as Blockly from "blockly/core";

class RhinoBloxProject {
    editor;
    version;
    title;
    data;

    constructor(editor, version) {
        this.editor = editor;
        this.version = version;
    }

    #downloadFile(filename, content, type = "text/plain") {
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    #uploadFile({ multiple = false, accept = "*/*" } = {}) {
        return new Promise((resolve) => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = accept;
            input.multiple = multiple;
            input.style.display = "none";
            document.body.appendChild(input);
            input.addEventListener("change", () => {
                resolve(multiple ? [...input.files] : input.files[0] || null);
                document.body.removeChild(input);
            }, { once: true });
            input.click();
        });
    }

    save() {
        this.data = Blockly.serialization.workspaces.save(workspace);
        const json = JSON.stringify(this, null, 2);
        if (this.title == "" | this.title == undefined | this.title == null) {
            this.title = "RhinoBlox Project";
        }
        this.#downloadFile(this.title + ".rbp", json, "application/json");
    }

    async load() {
        const file = await this.#uploadFile({ accept: ".rbp,.json" });
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                const data = JSON.parse(reader.result);
                Blockly.serialization.workspaces.load(data.data, workspace);

                this.title = data.title;
                this.data = data.data;

                document.getElementById('projectNameInput').value = this.title;
            };
            reader.readAsText(file);
        }
    }
}

export { RhinoBloxProject };