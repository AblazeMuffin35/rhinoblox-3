import * as Blockly from "blockly/core";

const rhinobloxDarkTheme = Blockly.Theme.defineTheme('rhinoblox_dark', {
    'base': Blockly.Themes.Classic,
    'componentStyles': {
      'workspaceBackgroundColour': '#101828',
      'toolboxBackgroundColour': '#1E2939',
      'toolboxForegroundColour': '#fff',
      'flyoutBackgroundColour': '#1E2939',
      'flyoutForegroundColour': '#ccc',
      'flyoutOpacity': 0.5,
      'scrollbarColour': '#797979',
      'insertionMarkerColour': '#fff',
      'insertionMarkerOpacity': 0.3,
      'scrollbarOpacity': 0.4,
      'cursorColour': '#d0d0d0',
      'blackBackground': '#333',
    },
    'fontStyle': {
      'family': 'Rubik, sans-serif',
      'weight': '450'
    },
    'blockStyles': {
      'loop_blocks': {
        'colourPrimary': '#26734c'
      },
      'logic_blocks': {
        'colourPrimary': '#265973'
      },
      'math_blocks': {
        'colourPrimary': '#304a80'
      },
      'text_blocks': {
        'colourPrimary': '#2a6f64'
      },
      'list_blocks': {
        'colourPrimary': '#4e3a78'
      }
    },
    'categoryStyles': {
      'loop_category': {
        'colour': '#26734c'
      },
      'logic_category': {
        'colour': '#265973'
      },
      'math_category': {
        'colour': '#304a80'
      },
      'text_category': {
        'colour': '#2a6f64'
      },
      'list_category': {
        'colour': '#4e3a78'
      },
      'custom_var_category': {
        'colour': '#862d3c'
      },
      'console_category': {
        'colour': '#674432'
      },
      'custom_color_category': {
        'colour': '#673267'
      }
    }
 });

export { rhinobloxDarkTheme };