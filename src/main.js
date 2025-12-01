import './style.css';

import * as Blockly from "blockly/core";
import "blockly/blocks";
import {registerFieldColour, FieldColour} from '@blockly/field-colour';
import '@blockly/field-colour-hsv-sliders';
import chroma from 'chroma-js';
import {javascriptGenerator} from 'blockly/javascript';
import * as En from "blockly/msg/en";

import { blocks } from './blocks.js';
import { toolbox } from './toolbox.js';
import { Minimap } from '@blockly/workspace-minimap';
import { rhinobloxDarkTheme } from './themes.js';

// Set locale to English
Blockly.setLocale(En);

// Load blocks
Blockly.common.defineBlocksWithJsonArray(blocks);

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

// Play and stop button
document.getElementById('playButton').addEventListener('click', function() {
    const code = javascriptGenerator.workspaceToCode(workspace);
    setupBeforeStarting();
    try {
        console.log(code);
        eval(code);
    } catch (e) {
        rhinobloxConsoleFunctions.logError(e);
    }
});
document.getElementById('stopButton').addEventListener('click', function() {
    setupBeforeStarting();
});
function setupBeforeStarting() {
    window.rhinobloxVariables = {};
    rhinobloxConsoleFunctions.clear();
}

// Disable orphan blocks
workspace.addChangeListener(Blockly.Events.disableOrphans);

// Create start block
let startBlock = workspace.newBlock('program_start');
startBlock.initSvg();
startBlock.render();
startBlock.setDeletable(false);
startBlock.snapToGrid();
workspace.centerOnBlock(startBlock.id);

// Console functions
const rhinobloxConsole = document.getElementById('outputConsole');
const rhinobloxConsoleFunctions = {
    log: function(text) {
        let span = document.createElement('span');
        span.innerText += text + '\n';
        rhinobloxConsole.appendChild(span);
    },
    logError: function(text) {
        let span = document.createElement('span');
        span.innerText += '[Error] ' + text + '\n';
        span.style.color = '#FB2C36';
        rhinobloxConsole.appendChild(span);
    },
    logWarning: function(text) {
        let span = document.createElement('span');
        span.innerText += '[Warning] ' + text + '\n';
        span.style.color = '#FFD230';
        rhinobloxConsole.appendChild(span);
    },
    logColor: function(text, color) {
        let span = document.createElement('span');
        span.innerText += text + '\n';
        span.style.color = color;
        rhinobloxConsole.appendChild(span);
    },
    clear: function() {
        rhinobloxConsole.innerHTML = '';
    },
    get: function() {
        let output = [];
        rhinobloxConsole.childNodes.forEach((node) => {
            output.push(node.innerText.trim());
        });
        return output;
    }
};

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
const versionBlacklist = [];
const rhinobloxProjectFunctions = {
    save: function(title) {
        const data = Blockly.serialization.workspaces.save(workspace);
        const rhinobloxData = {
            editor: "RhinoBlox",
            version: "3.0",
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

                setupBeforeStarting();

                if (data.editor == "RhinoBlox") {
                    if (versionBlacklist.includes(data.version)) {
                        rhinobloxConsoleFunctions.logWarning("The uploaded project is not compatible with this version of RhinoBlox.");
                    } else {
                        Blockly.Events.disable();
                        workspace.clear();
                        Blockly.Events.enable();
                        Blockly.serialization.workspaces.load(data.data, workspace);
                    }
                } else {
                    rhinobloxConsoleFunctions.logWarning("The uploaded file is not a RhinoBlox project.");
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

// Global variables
window.workspace = workspace;
window.Blockly = Blockly;
window.rhinobloxConsole = rhinobloxConsole;
window.rhinobloxConsoleFunctions = rhinobloxConsoleFunctions;
window.rhinobloxProjectFunctions = rhinobloxProjectFunctions;
window.chroma = chroma;

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

// Reset variables
setupBeforeStarting();

// Show page
document.body.style.opacity = 1;

// Clear console
setTimeout(() => {
    console.clear();
}, 500);