const blocks = [
{
  "type": "custom_variable_set",
  "tooltip": "",
  "helpUrl": "",
  "message0": "set variable %1 to %2",
  "args0": [
    {
      "type": "field_input",
      "name": "VARIABLE",
      "text": "var"
    },
    {
      "type": "input_value",
      "name": "VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#862d3c"
},
{
  "type": "custom_variable_get",
  "tooltip": "",
  "helpUrl": "",
  "message0": "variable %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "VARIABLE",
      "text": "var"
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": null,
  "colour": "#862d3c"
},
{
  "type": "custom_variable_call_function",
  "tooltip": "",
  "helpUrl": "",
  "message0": "call function %1",
  "args0": [
    {
      "type": "input_value",
      "name": "VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#862d3c"
},
{
  "type": "custom_variable_function",
  "tooltip": "",
  "helpUrl": "",
  "message0": "function %1 %2 return %3",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "CODE"
    },
    {
      "type": "input_value",
      "name": "OUTPUT",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": "#862d3c"
},
{
  "type": "custom_variable_call_function_round",
  "tooltip": "",
  "helpUrl": "",
  "message0": "call function %1",
  "args0": [
    {
      "type": "input_value",
      "name": "VALUE"
    }
  ],
  "output": null,
  "colour": "#862d3c"
},
{
  "type": "program_start",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 program start %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "/assets/play_button.svg",
      "height": 20,
      "width": 20,
      "alt": "",
      "flipRtl": "FALSE"
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_statement",
      "name": "CODE"
    }
  ],
  "colour": "#030712"
},
{
  "type": "console_log",
  "tooltip": "",
  "helpUrl": "",
  "message0": "log %1 to console %2",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXT"
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#674432",
  "inputsInline": true
},
{
  "type": "console_clear",
  "tooltip": "",
  "helpUrl": "",
  "message0": "clear console %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#674432",
  "inputsInline": true
},
{
  "type": "color_select",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_colour_hsv_sliders",
      "name": "COLOR",
      "colour": "#ff00ff"
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": null,
  "colour": "#ffffff",
  "inputsInline": true
},
{
  "type": "color_by_name",
  "tooltip": "",
  "helpUrl": "",
  "message0": "color %1",
  "args0": [
    {
      "type": "input_value",
      "name": "INPUT"
    }
  ],
  "output": null,
  "colour": "#673267",
  "inputsInline": true
},
{
  "type": "color_from_3_values",
  "tooltip": "",
  "helpUrl": "",
  "message0": "color from %1 %2 %3 %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "VALUE1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "VALUE2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "VALUE3",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "HSL",
          "hsl"
        ],
        [
          "HSV",
          "hsv"
        ],
        [
          "RGB",
          "rgb"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": null,
  "colour": "#673267",
  "inputsInline": true
},
{
  "type": "color_check",
  "tooltip": "",
  "helpUrl": "",
  "message0": "is %1 a valid color? %2",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR"
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "Boolean",
  "colour": "#673267",
  "inputsInline": true
},
{
  "type": "color_random",
  "tooltip": "",
  "helpUrl": "",
  "message0": "random color %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": null,
  "colour": "#673267",
  "inputsInline": true
},
{
  "type": "color_mix",
  "tooltip": "",
  "helpUrl": "",
  "message0": "mix colors using %1 %2 color 1: %3 color 2: %4 ratio: %5",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "HSL",
          "hsl"
        ],
        [
          "HSV",
          "hsv"
        ],
        [
          "RGB",
          "rgb"
        ],
        [
          "LRGB",
          "lrgb"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_value",
      "name": "COLOR1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "COLOR2",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "RATIO",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "output": null,
  "colour": "#673267"
},
{
  "type": "color_get",
  "tooltip": "",
  "helpUrl": "",
  "message0": "get color %1 as %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR"
    },
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "hex (text)",
          "hex"
        ],
        [
          "hex (number)",
          "num"
        ],
        [
          "name (text)",
          "name"
        ],
        [
          "RGB (list)",
          "rgb"
        ],
        [
          "RGBA (list)",
          "rgba"
        ],
        [
          "HSL (list)",
          "hsl"
        ],
        [
          "HSV (list)",
          "hsv"
        ],
        [
          "HSI (list)",
          "hsi"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": null,
  "colour": "#673267"
},
{
  "type": "console_log_color",
  "tooltip": "",
  "helpUrl": "",
  "message0": "log %1 to console in color %2",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXT"
    },
    {
      "type": "input_value",
      "name": "COLOR"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#674432",
  "inputsInline": true
},
{
  "type": "console_get",
  "tooltip": "",
  "helpUrl": "",
  "message0": "console as list %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": null,
  "colour": "#674432"
},
{
  "type": "custom_loop_for",
  "tooltip": "",
  "helpUrl": "",
  "message0": "count with variable %1 from %2 to %3 by %4 do %5",
  "args0": [
    {
      "type": "field_input",
      "name": "VARIABLE",
      "text": "var"
    },
    {
      "type": "input_value",
      "name": "START",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "END",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "NEXT",
      "check": "Number"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#26734c",
  "inputsInline": true
}
];

export { blocks };