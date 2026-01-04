// Imports
import * as Blockly from "blockly/core";
import "blockly/blocks";
import { registerFieldColour } from '@blockly/field-colour';
import '@blockly/field-colour-hsv-sliders';
import * as En from "blockly/msg/en";
import { blocks } from './blocks.js';
import { toolbox } from './toolbox.js';
import { Minimap } from '@blockly/workspace-minimap';
import { rhinobloxDarkTheme } from './themes.js';
import { CustomCategory } from './custom_category.js';

import '../ui/style.css';

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
const resizeBlockly = function() {
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

// Global variables
window.workspace = workspace;
window.Blockly = Blockly;