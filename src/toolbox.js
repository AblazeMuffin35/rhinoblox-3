import { inputs } from "blockly";

const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Loops',
      categorystyle: 'loop_category',
      contents: [
        {
          type: 'controls_repeat_ext',
          kind: 'block',
          inputs: {
            TIMES: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          type: 'controls_whileUntil',
          kind: 'block',
          fields: {
            MODE: 'WHILE',
          },
        },
        {
          type: 'custom_loop_for',
          kind: 'block',
          inputs: {
            START: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            END: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
            NEXT: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          type: 'program_loop',
          kind: 'block'
        },
        {
          type: 'program_start',
          kind: 'block'
        }
      ],
    },
    {
      kind: 'category',
      name: 'Logic',
      categorystyle: 'logic_category',
      contents: [
        {
          type: 'controls_if',
          kind: 'block',
        },
        {
          type: 'logic_compare',
          kind: 'block',
          fields: {
            OP: 'EQ',
          },
        },
        {
          type: 'logic_operation',
          kind: 'block',
          fields: {
            OP: 'AND',
          },
        },
        {
          type: 'logic_negate',
          kind: 'block',
        },
        {
          type: 'logic_boolean',
          kind: 'block',
          fields: {
            BOOL: 'TRUE',
          },
        },
        {
          type: 'logic_ternary',
          kind: 'block',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Math',
      categorystyle: 'math_category',
      contents: [
        {
          type: 'math_number',
          kind: 'block',
          fields: {
            NUM: 123,
          },
        },
        {
          type: 'math_arithmetic',
          kind: 'block',
          fields: {
            OP: 'ADD',
          },
          inputs: {
            A: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          type: 'math_single',
          kind: 'block',
          fields: {
            OP: 'ROOT',
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 9,
                },
              },
            },
          },
        },
        {
          type: 'math_trig',
          kind: 'block',
          fields: {
            OP: 'SIN',
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 45,
                },
              },
            },
          },
        },
        {
          type: 'math_constant',
          kind: 'block',
          fields: {
            CONSTANT: 'PI',
          },
        },
        {
          type: 'math_number_property',
          kind: 'block',
          fields: {
            PROPERTY: 'EVEN',
          },
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          type: 'math_round',
          kind: 'block',
          fields: {
            OP: 'ROUND',
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 3.1,
                },
              },
            },
          },
        },
        {
          type: 'math_on_list',
          kind: 'block',
          fields: {
            OP: 'SUM',
          },
        },
        {
          type: 'math_modulo',
          kind: 'block',
          inputs: {
            DIVIDEND: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 64,
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          type: 'math_constrain',
          kind: 'block',
          inputs: {
            VALUE: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
            LOW: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          type: 'math_random_int',
          kind: 'block',
          inputs: {
            FROM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          type: 'math_random_float',
          kind: 'block',
        },
        {
          type: 'math_atan2',
          kind: 'block',
          inputs: {
            X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: 'category',
      name: 'Text',
      categorystyle: 'text_category',
      contents: [
        {
          type: 'text',
          kind: 'block',
          fields: {
            TEXT: '',
          },
        },
        {
          type: 'text_join',
          kind: 'block',
        },
        {
          type: 'text_length',
          kind: 'block',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          type: 'text_isEmpty',
          kind: 'block',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
          },
        },
        {
          type: 'text_indexOf',
          kind: 'block',
          fields: {
            END: 'FIRST',
          },
          inputs: {
            VALUE: {
              block: {
                type: 'custom_variable_get',
                fields: {
                  VARIABLE: 'text',
                },
              },
            },
            FIND: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          type: 'text_charAt',
          kind: 'block',
          fields: {
            WHERE: 'FROM_START',
          },
          inputs: {
            VALUE: {
              block: {
                type: 'custom_variable_get',
                fields: {
                  VARIABLE: 'text',
                },
              },
            },
          },
        },
        {
          type: 'text_getSubstring',
          kind: 'block',
          fields: {
            WHERE1: 'FROM_START',
            WHERE2: 'FROM_START',
          },
          inputs: {
            STRING: {
              block: {
                type: 'custom_variable_get',
                fields: {
                  VARIABLE: 'text',
                },
              },
            },
          },
        },
        {
          type: 'text_changeCase',
          kind: 'block',
          fields: {
            CASE: 'UPPERCASE',
          },
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          type: 'text_trim',
          kind: 'block',
          fields: {
            MODE: 'BOTH',
          },
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          type: 'text_count',
          kind: 'block',
          inputs: {
            SUB: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
          },
        },
        {
          type: 'text_replace',
          kind: 'block',
          inputs: {
            FROM: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
            TO: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
          },
        },
        {
          type: 'text_reverse',
          kind: 'block',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: 'category',
      name: 'Lists',
      categorystyle: 'list_category',
      contents: [
        {
          type: 'lists_create_with',
          kind: 'block',
        },
        {
          type: 'lists_repeat',
          kind: 'block',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          type: 'lists_length',
          kind: 'block',
        },
        {
          type: 'lists_isEmpty',
          kind: 'block',
        },
        {
          type: 'lists_indexOf',
          kind: 'block',

          fields: {
            END: 'FIRST',
          },
          inputs: {
            VALUE: {
              block: {
                type: 'custom_variable_get',
                fields: {
                  VARIABLE: 'list',
                },
              },
            },
          },
        },
        {
          type: 'lists_getIndex',
          kind: 'block',
          fields: {
            MODE: 'GET',
            WHERE: 'FROM_START',
          },
          inputs: {
            VALUE: {
              block: {
                type: 'custom_variable_get',
                fields: {
                  VARIABLE: 'list',
                },
              },
            },
          },
        },
        {
          type: 'lists_setIndex',
          kind: 'block',
          fields: {
            MODE: 'SET',
            WHERE: 'FROM_START',
          },
          inputs: {
            LIST: {
              block: {
                type: 'custom_variable_get',
                fields: {
                  VARIABLE: 'list',
                },
              },
            },
          },
        },
        {
          type: 'lists_getSublist',
          kind: 'block',
          fields: {
            WHERE1: 'FROM_START',
            WHERE2: 'FROM_START',
          },
          inputs: {
            LIST: {
              block: {
                type: 'custom_variable_get',
                fields: {
                  VARIABLE: 'list',
                },
              },
            },
          },
        },
        {
          type: 'lists_split',
          kind: 'block',

          fields: {
            MODE: 'SPLIT',
          },
          inputs: {
            DELIM: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ',',
                },
              },
            },
          },
        },
        {
          type: 'lists_sort',
          kind: 'block',

          fields: {
            TYPE: 'NUMERIC',
            DIRECTION: '1',
          },
        },
        {
          type: 'lists_reverse',
          kind: 'block',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Colors',
      categorystyle: 'custom_color_category',
      contents: [
        {
          type: 'color_select',
          kind: 'block'
        },
        {
          type: 'color_random',
          kind: 'block',
        },
        {
          type: 'color_by_name',
          kind: 'block',
          inputs: {
            INPUT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'magenta',
                },
              },
            },
          },
        },
        {
          type: 'color_check',
          kind: 'block',
          inputs: {
            COLOR: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'magenta',
                },
              },
            },
          },
        },
        {
          type: 'color_from_3_values',
          kind: 'block',
          inputs: {
            VALUE1: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            VALUE2: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            VALUE3: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          type: 'color_mix',
          kind: 'block',
          inputs: {
            COLOR1: {
              shadow: {
                type: 'color_select'
              },
            },
            COLOR2: {
              shadow: {
                type: 'color_select',
                fields: {
                  COLOR: 'black',
                }
              },
            },
            RATIO: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0.5,
                },
              },
            },
          },
        },
        {
          type: 'color_get',
          kind: 'block',
          inputs: {
            COLOR: {
              shadow: {
                type: 'color_select'
              },
            },
          },
        }
      ]
    },
    {
      kind: 'category',
      name: 'Variables',
      categorystyle: 'custom_var_category',
      contents: [
        {
          type: 'custom_variable_get',
          kind: 'block'
        },
        {
          type: 'custom_variable_set',
          kind: 'block'
        },
        {
          type: 'custom_variable_call_function',
          kind: 'block'
        },
        {
          type: 'custom_variable_call_function_round',
          kind: 'block'
        },
        {
          type: 'custom_variable_function',
          kind: 'block'
        }
      ]
    },
    {
      kind: 'category',
      name: 'Input / Output',
      categorystyle: 'input_category',
      contents: [
        {
          type: 'input_mouse_x',
          kind: 'block'
        },
        {
          type: 'input_mouse_y',
          kind: 'block'
        },
        {
          type: 'input_mouse_button_press',
          kind: 'block'
        },
        {
          type: 'input_mouse_button_last',
          kind: 'block'
        },
        {
          type: 'input_key_press',
          kind: 'block'
        },
        {
          type: 'input_key_last',
          kind: 'block'
        },
        {
          kind: 'sep',
          gap: 50,
        },
        {
          type: 'input_get_delta_time',
          kind: 'block'
        },
        {
          type: 'input_get_current_fps',
          kind: 'block'
        },
        {
          type: 'input_get_target_fps',
          kind: 'block'
        },
        {
          type: 'input_set_target_fps',
          kind: 'block',
          inputs: {
            FRAMERATE: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 120,
                },
              },
            },
          },
        },
      ]
    },
    {
      kind: 'category',
      name: 'Graphics',
      categorystyle: 'graphics_category',
      contents: [
        {
          type: 'graphics_clear',
          kind: 'block',
          inputs: {
          COLOR: {
            shadow: {
              type: 'color_select',
              fields: {
                COLOR: '#000000',
              }
            },
          },
          }
        },
        {
          type: 'graphics_fill',
          kind: 'block',
          inputs: {
          COLOR: {
            shadow: {
              type: 'color_select',
              fields: {
                COLOR: '#ff00ff',
              }
            },
          },
          }
        },
        {
          type: 'graphics_stroke',
          kind: 'block',
          inputs: {
          COLOR: {
            shadow: {
              type: 'color_select',
              fields: {
                COLOR: '#ff00ff',
              }
            },
          },
          }
        },
        {
          type: 'graphics_weight',
          kind: 'block',
          inputs: {
            WEIGHT: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          type: 'graphics_draw_rect',
          kind: 'block',
          inputs: {
            START_X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            START_Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            END_X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
            END_Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
            RADIUS: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          type: 'graphics_draw_ellipse',
          kind: 'block',
          inputs: {
            START_X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            START_Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            END_X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
            END_Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            }
          },
        },
        {
          type: 'graphics_draw_capsule',
          kind: 'block',
          inputs: {
            START_X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            START_Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            END_X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            END_Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
            RADIUS: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 25,
                },
              },
            },
          },
        },
        {
          type: 'graphics_draw_triangle',
          kind: 'block',
          inputs: {
            X1: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            Y1: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            X2: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: -50,
                },
              },
            },
            Y2: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
            X3: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
            Y3: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            }
          },
        },
      ]
    },
  ],
};

export { toolbox };