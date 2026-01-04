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
},
{
  "type": "image_from_url",
  "tooltip": "",
  "helpUrl": "",
  "message0": "load image from URL %1",
  "args0": [
    {
      "type": "input_value",
      "name": "URL",
      "check": "String"
    }
  ],
  "output": "Image",
  "colour": "#74503e"
},
{
  "type": "graphics_draw_image",
  "tooltip": "",
  "helpUrl": "",
  "message0": "draw image %1 image: %2 start x: %3 start y: %4 end x: %5 end y: %6",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_value",
      "name": "IMAGE",
      "align": "RIGHT",
      "check": "Image"
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
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": false
},
{
  "type": "image_new_image",
  "tooltip": "",
  "helpUrl": "",
  "message0": "new image with %1 width: %2 height: %3",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_value",
      "name": "WIDTH",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "HEIGHT",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "output": "Image",
  "colour": "#74503e"
},
{
  "type": "image_get_pixel",
  "tooltip": "",
  "helpUrl": "",
  "message0": "get color of pixel %1 image: %2 x: %3 y: %4",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_value",
      "name": "IMAGE",
      "align": "RIGHT",
      "check": "Image"
    },
    {
      "type": "input_value",
      "name": "X",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "output": null,
  "colour": "#74503e"
},
{
  "type": "image_set_pixel",
  "tooltip": "",
  "helpUrl": "",
  "message0": "set color of pixel %1 image: %2 x: %3 y: %4 color: %5",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_value",
      "name": "IMAGE",
      "align": "RIGHT",
      "check": "Image"
    },
    {
      "type": "input_value",
      "name": "X",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "COLOR",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74503e"
},
{
  "type": "image_apply_filter",
  "tooltip": "",
  "helpUrl": "",
  "message0": "apply %1 filter with value %2 to image %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FILTER",
      "options": [
        [
          "blur",
          "blur"
        ],
        [
          "posterize",
          "posterize"
        ],
        [
          "threshold",
          "threshold"
        ],
        [
          "invert",
          "invert"
        ],
        [
          "hue rotate",
          "hue-rotate"
        ],
        [
          "brightness",
          "brightness"
        ],
        [
          "contrast",
          "contrast"
        ],
        [
          "sepia",
          "sepia"
        ],
        [
          "grayscale",
          "grayscale"
        ],
        [
          "saturate",
          "saturate"
        ],
        [
          "opacity",
          "opacity"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "IMAGE",
      "check": "Image"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74503e",
  "inputsInline": true
},
{
  "type": "image_copy",
  "tooltip": "",
  "helpUrl": "",
  "message0": "copy of image %1",
  "args0": [
    {
      "type": "input_value",
      "name": "IMAGE",
      "check": "Image"
    }
  ],
  "output": "Image",
  "colour": "#74503e"
},
{
  "type": "graphics_disable_stroke",
  "tooltip": "",
  "helpUrl": "",
  "message0": "disable stroke %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e"
},
{
  "type": "graphics_disable_fill",
  "tooltip": "",
  "helpUrl": "",
  "message0": "disable fill %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e"
},
{
  "type": "input_canvas_width",
  "tooltip": "",
  "helpUrl": "",
  "message0": "program width %1",
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
  "type": "input_canvas_height",
  "tooltip": "",
  "helpUrl": "",
  "message0": "program height %1",
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
  "type": "input_resize_program",
  "tooltip": "",
  "helpUrl": "",
  "message0": "resize program with %1 width: %2 height: %3",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY"
    },
    {
      "type": "input_value",
      "name": "WIDTH",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "HEIGHT",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#67743e"
},
{
  "type": "image_apply_css_filter",
  "tooltip": "",
  "helpUrl": "",
  "message0": "apply custom CSS filter %1 to image %2",
  "args0": [
    {
      "type": "input_value",
      "name": "CSS",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "IMAGE",
      "check": "Image"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74503e",
  "inputsInline": true
},
{
  "type": "graphics_set_font_family",
  "tooltip": "",
  "helpUrl": "",
  "message0": "set font family to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "FAMILY",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": true
},
{
  "type": "graphics_set_font_size",
  "tooltip": "",
  "helpUrl": "",
  "message0": "set font size to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SIZE",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e",
  "inputsInline": true
},
{
  "type": "graphics_draw_text",
  "tooltip": "",
  "helpUrl": "",
  "message0": "draw text %1 text: %2 x: %3 y: %4 horizontal align: %5 %6 vertical align: %7 %8",
  "args0": [
    {
      "type": "input_dummy",
      "name": "DUMMY1"
    },
    {
      "type": "input_value",
      "name": "TEXT",
      "align": "RIGHT",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "X",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "H_ALIGN",
      "options": [
        [
          "left",
          "LEFT"
        ],
        [
          "center",
          "CENTER"
        ],
        [
          "right",
          "RIGHT"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "DUMMY2",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "V_ALIGN",
      "options": [
        [
          "top",
          "TOP"
        ],
        [
          "baseline",
          "BASELINE"
        ],
        [
          "bottom",
          "BOTTOM"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "DUMMY3",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e"
},
{
  "type": "image_from_text",
  "tooltip": "",
  "helpUrl": "",
  "message0": "new image from text %1",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXT",
      "check": "String"
    }
  ],
  "output": "Image",
  "colour": "#74503e"
},
{
  "type": "math_lerp",
  "tooltip": "",
  "helpUrl": "",
  "message0": "interpolate from %1 to %2 with %3",
  "args0": [
    {
      "type": "input_value",
      "name": "FROM",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "TO",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "WITH",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": "#304a80",
  "inputsInline": true
},
{
  "type": "logic_chance",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 % chance %2",
  "args0": [
    {
      "type": "input_value",
      "name": "PERCENT",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "output": "Boolean",
  "colour": "#265973",
},
{
  "type": "graphics_rotate",
  "tooltip": "",
  "helpUrl": "",
  "message0": "rotate graphics by %1 degrees %2",
  "args0": [
    {
      "type": "input_value",
      "name": "DEGREES",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e"
},
{
  "type": "graphics_skew",
  "tooltip": "",
  "helpUrl": "",
  "message0": "skew graphics by %1 degrees along the %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "DEGREES",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "AXIS",
      "options": [
        [
          "x-axis",
          "X"
        ],
        [
          "y-axis",
          "Y"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "DUMMY"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#74683e"
}
];

export { blocks };