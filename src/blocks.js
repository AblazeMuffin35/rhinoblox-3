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
  "message0": "on program start %1 do %2",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_statement",
      "name": "CODE"
    }
  ],
  "colour": "#26734c",
  "inputsInline": true
},
{
  "type": "program_loop",
  "tooltip": "",
  "helpUrl": "",
  "message0": "every frame %1 do %2",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_statement",
      "name": "CODE"
    }
  ],
  "colour": "#26734c",
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
},
{
  "type": "graphics_clear",
  "tooltip": "",
  "helpUrl": "",
  "message0": "clear with color %1",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": true
},
{
  "type": "graphics_fill",
  "tooltip": "",
  "helpUrl": "",
  "message0": "set fill to color %1",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": true
},
{
  "type": "graphics_stroke",
  "tooltip": "",
  "helpUrl": "",
  "message0": "set stroke to color %1",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": true
},
{
  "type": "graphics_weight",
  "tooltip": "",
  "helpUrl": "",
  "message0": "set stroke weight to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "WEIGHT",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": true
},
{
  "type": "graphics_draw_rect",
  "tooltip": "",
  "helpUrl": "",
  "message0": "draw rectangle %1 start x: %2 start y: %3 end x: %4 end y: %5 corner radius: %6",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_value",
      "name": "START_X",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "START_Y",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "END_X",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "END_Y",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "RADIUS",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": false
},
{
  "type": "graphics_draw_ellipse",
  "tooltip": "",
  "helpUrl": "",
  "message0": "draw ellipse %1 start x: %2 start y: %3 end x: %4 end y: %5",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_value",
      "name": "START_X",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "START_Y",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "END_X",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "END_Y",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": false
},
{
  "type": "graphics_draw_capsule",
  "tooltip": "",
  "helpUrl": "",
  "message0": "draw capsule %1 start x: %2 start y: %3 end x: %4 end y: %5 circle radius: %6",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_value",
      "name": "START_X",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "START_Y",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "END_X",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "END_Y",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "RADIUS",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": false
},
{
  "type": "graphics_draw_triangle",
  "tooltip": "",
  "helpUrl": "",
  "message0": "draw triangle %1 x 1: %2 y 1: %3 x 2: %4 y 2: %5 x 3: %6 y 3: %7",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_value",
      "name": "X1",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y1",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "X2",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y2",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "X3",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y3",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": false
},
{
  "type": "input_mouse_x",
  "tooltip": "",
  "helpUrl": "",
  "message0": "mouse x %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "Number",
  "colour": "#67743e"
},
{
  "type": "input_mouse_y",
  "tooltip": "",
  "helpUrl": "",
  "message0": "mouse y %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "Number",
  "colour": "#67743e"
},
{
  "type": "input_mouse_button_press",
  "tooltip": "",
  "helpUrl": "",
  "message0": "mouse button pressed? %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "Boolean",
  "colour": "#67743e"
},
{
  "type": "input_key_press",
  "tooltip": "",
  "helpUrl": "",
  "message0": "key pressed? %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "Boolean",
  "colour": "#67743e"
},
{
  "type": "input_mouse_button_last",
  "tooltip": "",
  "helpUrl": "",
  "message0": "last mouse button%1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "String",
  "colour": "#67743e"
},
{
  "type": "input_key_last",
  "tooltip": "",
  "helpUrl": "",
  "message0": "last key%1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "String",
  "colour": "#67743e"
},
{
  "type": "input_set_target_fps",
  "tooltip": "",
  "helpUrl": "",
  "message0": "set target framerate to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "FRAMERATE",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#67743e"
},
{
  "type": "input_get_target_fps",
  "tooltip": "",
  "helpUrl": "",
  "message0": "target framerate %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "Number",
  "colour": "#67743e"
},
{
  "type": "input_get_current_fps",
  "tooltip": "",
  "helpUrl": "",
  "message0": "current framerate %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "Number",
  "colour": "#67743e"
},
{
  "type": "input_get_delta_time",
  "tooltip": "",
  "helpUrl": "",
  "message0": "delta time %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "Number",
  "colour": "#67743e"
}
];

export { blocks };