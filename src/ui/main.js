// Imports
import * as Blockly from "blockly/core";
import { javascriptGenerator } from 'blockly/javascript';
import { RhinoBloxProject } from './rhinoblox_project';
import { RhinoBloxHtmlGenerator } from "./rhinoblox_html_generator";
import js_beautify from 'js-beautify';

// Project
const project = new RhinoBloxProject('RhinoBlox', '3.2');

// Event listeners
document.getElementById('saveButton').addEventListener('click', function() {
    project.save();
});

document.getElementById('loadButton').addEventListener('click', function() {
    project.load();
});

const aboutDialog = document.getElementById('aboutDialog');
document.getElementById('aboutButton').addEventListener('click', function() {
    aboutDialog.showModal();
});
aboutDialog.addEventListener("click", (e) => {
    if (e.target === aboutDialog) {
        aboutDialog.close();
    }
});

const programDialog = document.getElementById('programDialog');
const programFrame = document.getElementById('programFrame');
document.getElementById('startButton').addEventListener('click', function() {
    const javascriptCode = js_beautify(javascriptGenerator.workspaceToCode(workspace));

    programFrame.srcdoc = RhinoBloxHtmlGenerator.generate(javascriptCode);

    programDialog.showModal();
});
programDialog.addEventListener("click", (e) => {
    if (e.target === programDialog) {
        programDialog.close();
    }
});
programDialog.addEventListener("close", () => {
    programFrame.srcdoc = '';
});

// Code changes
workspace.addChangeListener((e) => {
    if (e instanceof Blockly.Events.BlockBase) {
        const javascriptCode = js_beautify(javascriptGenerator.workspaceToCode(workspace));
        try {
            updateCode(javascriptCode);
        } catch (e) {

        }
    }

    if (e instanceof Blockly.Events.BlockDelete) {
        workspace.zoomToFit();
    }
});

// Project naming
document.getElementById('projectNameInput').value = '';

document.getElementById('projectNameInput').addEventListener('input', function() {
    project.title = this.value;
});

// Show website
onload = () => {
    document.body.style.opacity = 1;
}