import './style.css';

import * as Blockly from "blockly/core";
import "blockly/blocks";
import { registerFieldColour } from '@blockly/field-colour';
import '@blockly/field-colour-hsv-sliders';
import { javascriptGenerator } from 'blockly/javascript';
import * as En from "blockly/msg/en";
import { blocks } from './blocks.js';
import { toolbox } from './toolbox.js';
import { Minimap } from '@blockly/workspace-minimap';
import { rhinobloxDarkTheme } from './themes.js';
import { CustomCategory } from './custom_category.js';

import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

import js_beautify from 'js-beautify';

// Set locale to English
Blockly.setLocale(En);

// Load blocks
Blockly.common.defineBlocksWithJsonArray(blocks);

// Register custom category
Blockly.registry.register(Blockly.registry.Type.TOOLBOX_ITEM, Blockly.ToolboxCategory.registrationName, CustomCategory, true);

// Create workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    zoom: {
        controls: true,
        wheel: true,
        startScale: 0.8,
        maxScale: 1.4,
        minScale: 0.4,
        scaleSpeed: 1.1,
        pinch: true
    },
    grid: {
        spacing: 30,
        length: 2,
        colour: '#5c5c5c',
        snap: true
    },
    trashcan: true,
    renderer: 'zelos',
    theme: rhinobloxDarkTheme,
    media: '/blockly_media/',
    maxInstances: {
        'program_start': 1,
        'program_loop': 1
    }
});

// Create minimap
const minimap = new Minimap(workspace);
minimap.init();
minimap.disableFocusRegion();

// Register colour field
registerFieldColour();

// Resize blockly
const resizeBlockly = function(e) {
    let element = blocklyArea;
    let x = 0;
    let y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};
window.addEventListener('resize', resizeBlockly);
resizeBlockly();

// Disable orphan blocks
workspace.addChangeListener(Blockly.Events.disableOrphans);

// Create start block
let startBlock = workspace.newBlock('program_start');
startBlock.initSvg();
startBlock.render();
startBlock.snapToGrid();
workspace.centerOnBlock(startBlock.id);

// File functions
function downloadFile(filename, content, type = "text/plain") {
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

function openFileDialog({ multiple = false, accept = "*/*" } = {}) {
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

// Project functions
const rhinobloxProjectFunctions = {
    save: function(title) {
        const data = Blockly.serialization.workspaces.save(workspace);
        const rhinobloxData = {
            editor: "RhinoBlox",
            version: "3.1",
            title: title,
            data: data
        };
        const json = JSON.stringify(rhinobloxData, null, 2);
        downloadFile(title + ".rbp", json, "application/json");
    },
    load: async function() {
        const file = await openFileDialog({ accept: ".rbp,.json" });
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                const data = JSON.parse(reader.result);

                if (data.editor == "RhinoBlox") {
                    Blockly.serialization.workspaces.load(data.data, workspace);
                } else {
                    alert("The uploaded file isn't a RhinoBlox project!");
                }
            };
            reader.readAsText(file);
        }
    }
};

// Popup functions
const rhinobloxPopupFunctions = {
    openAbout: function() {
        document.getElementById('popup-container').style.display = 'flex';
        document.getElementById('about-popup').style.display = 'block';
    },
    closeAllPopups: function() {
        document.getElementById('popup-container').style.display = 'none';
        document.getElementById('about-popup').style.display = 'none';
    }
};
rhinobloxPopupFunctions.closeAllPopups();

// Event listeners
document.getElementById('saveButton').addEventListener('click', function() {
    rhinobloxProjectFunctions.save("project");
});
document.getElementById('loadButton').addEventListener('click', function() {
    rhinobloxProjectFunctions.load();
});
document.getElementById('aboutButton').addEventListener('click', function() {
    rhinobloxPopupFunctions.openAbout();
});
document.getElementById('popup-container').addEventListener('click', function() {
    rhinobloxPopupFunctions.closeAllPopups();
});
document.getElementById('about-popup').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Website launch
let programWindow = null;
const launchWebsite = function() {
    const javascriptCode = js_beautify(javascriptGenerator.workspaceToCode(workspace), { indent_size: 4, indent_level: 0 });

    const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RhinoBlox</title>

        <script src="https://q5js.org/q5.js"></script>
    </head>
    <body style="margin: 0; padding: 0; overflow: hidden; background-color: black;" oncontextmenu="return false;">
    <script type="module">
        import chroma from 'https://cdn.jsdelivr.net/npm/chroma-js@3.2.0/+esm';
        window.chroma = chroma;
    </script>
    <script>
        let rhinobloxVariables = {};
        let rhinobloxStart = () => {};
        let rhinobloxUpdate = () => {};

        Q5.WebGPU();
        function setup() {
            createCanvas(800, 600);
            displayMode(MAXED, SMOOTH);
            background("white");
            frameRate(120);
            rectMode(CORNERS);
            ellipseMode(CORNERS);

            ${javascriptCode}

            rhinobloxStart();
            q5.draw = () => {
                rhinobloxUpdate();
            }
        }
    </script>
    </body>
    </html>
    `;

    if (programWindow != null) {
        programWindow.close();
    }

    const blob = new Blob([htmlCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    programWindow = window.open(url, "_blank", "width=800,height=600");

    programWindow.addEventListener("load", () => {
        URL.revokeObjectURL(url);
    });
}

// Start button
document.getElementById('playButton').addEventListener('click', launchWebsite);

// Stop button
document.getElementById('stopButton').addEventListener('click', function() {
    if (programWindow != null) {
        programWindow.close();
    }
});

// Code generation
workspace.addChangeListener(() => {
    const javascriptCode = js_beautify(javascriptGenerator.workspaceToCode(workspace), { indent_size: 4, indent_level: 0 });
    document.getElementById('generatedCode').innerHTML = hljs.highlight(javascriptCode, { language: 'javascript' }).value;
});

// Global variables
window.workspace = workspace;
window.Blockly = Blockly;
window.rhinobloxProjectFunctions = rhinobloxProjectFunctions;
window.launchWebsite = launchWebsite;

// Show page
document.body.style.opacity = 1;