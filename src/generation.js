import * as Blockly from 'blockly/core';
import {JavascriptGenerator, javascriptGenerator, Order, } from 'blockly/javascript';

javascriptGenerator.forBlock['custom_variable_set'] = function(block, generator) {
  const text_variable = block.getFieldValue('VARIABLE');
  const value_value = generator.valueToCode(block, 'VALUE', Order.ATOMIC);
  const code = 'rhinobloxVariables["' + text_variable + '"] = ' + value_value + ';\n';
  return code;
}

javascriptGenerator.forBlock['custom_variable_get'] = function(block, generator) {
  const text_variable = block.getFieldValue('VARIABLE');
  const code = 'rhinobloxVariables["' + text_variable + '"]';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['custom_variable_call_function'] = function(block, generator) {
  const value_value = generator.valueToCode(block, 'VALUE', Order.ATOMIC);
  const code = value_value + '();\n';
  return code;
}

javascriptGenerator.forBlock['custom_variable_call_function_round'] = function(block, generator) {
  const value_value = generator.valueToCode(block, 'VALUE', Order.ATOMIC);
  const code = value_value + '()';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['custom_variable_function'] = function(block, generator) {
  const statement_code = generator.statementToCode(block, 'CODE');
  let value_output = generator.valueToCode(block, 'OUTPUT', Order.ATOMIC);
  if (value_output == '') value_output = 'undefined';
  const code = '() => {\n' + statement_code + 'return ' + value_output + ';\n}\n';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['program_start'] = function(block, generator) {
  const statement_code = generator.statementToCode(block, 'CODE');
  const code = 'rhinobloxStart = () => {\n' + statement_code + '};\n';
  return code;
}

javascriptGenerator.forBlock['program_loop'] = function(block, generator) {
  const statement_code = generator.statementToCode(block, 'CODE');
  const code = 'rhinobloxUpdate = () => {\n' + statement_code + '};\n';
  return code;
}

javascriptGenerator.forBlock['color_select'] = function(block, generator) {
  const colour_color = block.getFieldValue('COLOR');
  const code = 'chroma("' + colour_color + '")';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['color_by_name'] = function(block, generator) {
  const value_input = generator.valueToCode(block, 'INPUT', Order.ATOMIC);
  const code = 'chroma(' + value_input + ')';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['color_from_3_values'] = function(block, generator) {
  const value_value1 = generator.valueToCode(block, 'VALUE1', Order.ATOMIC);
  const value_value2 = generator.valueToCode(block, 'VALUE2', Order.ATOMIC);
  const value_value3 = generator.valueToCode(block, 'VALUE3', Order.ATOMIC);
  const dropdown_type = block.getFieldValue('TYPE');
  const code = 'chroma(' + value_value1 + ', ' + value_value2 + ', ' + value_value3 + ', "' + dropdown_type + '")';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['color_check'] = function(block, generator) {
  const value_color = generator.valueToCode(block, 'COLOR', Order.ATOMIC);
  const code = 'chroma.valid(' + value_color + ')';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['color_random'] = function(block, generator) {
  const code = 'chroma.random()';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['color_mix'] = function(block, generator) {
  const dropdown_type = block.getFieldValue('TYPE');
  const value_color1 = generator.valueToCode(block, 'COLOR1', Order.ATOMIC);
  const value_color2 = generator.valueToCode(block, 'COLOR2', Order.ATOMIC);
  const value_ratio = generator.valueToCode(block, 'RATIO', Order.ATOMIC);
  const code = 'chroma.mix(' + value_color1 + ', ' + value_color2 + ', ' + value_ratio + ', "' + dropdown_type + '")';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['color_get'] = function(block, generator) {
  const value_color = generator.valueToCode(block, 'COLOR', Order.ATOMIC);
  const dropdown_type = block.getFieldValue('TYPE');
  const code = 'chroma(' + value_color + ').get("' + dropdown_type + '")';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['custom_loop_for'] = function(block, generator) {
  const text_variable = block.getFieldValue('VARIABLE');
  const value_start = generator.valueToCode(block, 'START', Order.ATOMIC);
  const value_end = generator.valueToCode(block, 'END', Order.ATOMIC);
  const value_next = generator.valueToCode(block, 'NEXT', Order.ATOMIC);
  const statement_name = generator.statementToCode(block, 'NAME');
  const code = 'for (rhinobloxVariables["' + text_variable + '"] = ' + value_start + '; rhinobloxVariables["' + text_variable + '"] <= ' + value_end + '; rhinobloxVariables["' + text_variable + '"] += ' + value_next + ') {\n' + statement_name + '}\n';
  return code;
}

javascriptGenerator.forBlock['graphics_clear'] = function(block, generator) {
  const value_color = generator.valueToCode(block, 'COLOR', Order.ATOMIC);
  const code = 'background((' + value_color + ').toString());\n';
  return code;
}

javascriptGenerator.forBlock['graphics_fill'] = function(block, generator) {
  const value_color = generator.valueToCode(block, 'COLOR', Order.ATOMIC);
  const code = 'fill((' + value_color + ').toString());\n';
  return code;
}

javascriptGenerator.forBlock['graphics_stroke'] = function(block, generator) {
  const value_color = generator.valueToCode(block, 'COLOR', Order.ATOMIC);
  const code = 'stroke((' + value_color + ').toString());\n';
  return code;
}

javascriptGenerator.forBlock['graphics_weight'] = function(block, generator) {
  const value_weight = generator.valueToCode(block, 'WEIGHT', Order.ATOMIC);
  const code = 'strokeWeight(' + value_weight + ');\n';
  return code;
}

javascriptGenerator.forBlock['graphics_draw_rect'] = function(block, generator) {
  const value_start_x = generator.valueToCode(block, 'START_X', Order.ATOMIC);
  const value_start_y = generator.valueToCode(block, 'START_Y', Order.ATOMIC);
  const value_end_x = generator.valueToCode(block, 'END_X', Order.ATOMIC);
  const value_end_y = generator.valueToCode(block, 'END_Y', Order.ATOMIC);
  const code = 'rect(' + value_start_x + ', ' + value_start_y + ', ' + value_end_x + ', ' + value_end_y + ');\n';
  return code;
}

javascriptGenerator.forBlock['graphics_draw_rect'] = function(block, generator) {
  const value_start_x = generator.valueToCode(block, 'START_X', Order.ATOMIC);
  const value_start_y = generator.valueToCode(block, 'START_Y', Order.ATOMIC);
  const value_end_x = generator.valueToCode(block, 'END_X', Order.ATOMIC);
  const value_end_y = generator.valueToCode(block, 'END_Y', Order.ATOMIC);
  const value_radius = generator.valueToCode(block, 'RADIUS', Order.ATOMIC);
  const code = 'rect(' + value_start_x + ', ' + value_start_y + ', ' + value_end_x + ', ' + value_end_y + ', ' + value_radius + ');\n';
  return code;
}

javascriptGenerator.forBlock['graphics_draw_ellipse'] = function(block, generator) {
  const value_start_x = generator.valueToCode(block, 'START_X', Order.ATOMIC);
  const value_start_y = generator.valueToCode(block, 'START_Y', Order.ATOMIC);
  const value_end_x = generator.valueToCode(block, 'END_X', Order.ATOMIC);
  const value_end_y = generator.valueToCode(block, 'END_Y', Order.ATOMIC);
  const code = 'ellipse(' + value_start_x + ', ' + value_start_y + ', ' + value_end_x + ', ' + value_end_y + ');\n';
  return code;
}

javascriptGenerator.forBlock['graphics_draw_capsule'] = function(block, generator) {
  const value_start_x = generator.valueToCode(block, 'START_X', Order.ATOMIC);
  const value_start_y = generator.valueToCode(block, 'START_Y', Order.ATOMIC);
  const value_end_x = generator.valueToCode(block, 'END_X', Order.ATOMIC);
  const value_end_y = generator.valueToCode(block, 'END_Y', Order.ATOMIC);
  const value_radius = generator.valueToCode(block, 'RADIUS', Order.ATOMIC);
  const code = 'capsule(' + value_start_x + ', ' + value_start_y + ', ' + value_end_x + ', ' + value_end_y + ', ' + value_radius + ');\n';
  return code;
}

javascriptGenerator.forBlock['graphics_draw_triangle'] = function(block, generator) {
  const value_x1 = generator.valueToCode(block, 'X1', Order.ATOMIC);
  const value_y1 = generator.valueToCode(block, 'Y1', Order.ATOMIC);
  const value_x2 = generator.valueToCode(block, 'X2', Order.ATOMIC);
  const value_y2 = generator.valueToCode(block, 'Y2', Order.ATOMIC);
  const value_x3 = generator.valueToCode(block, 'X3', Order.ATOMIC);
  const value_y3 = generator.valueToCode(block, 'Y3', Order.ATOMIC);
  const code = 'triangle(' + value_x1 + ', ' + value_y1 + ', ' + value_x2 + ', ' + value_y2 + ', ' + value_x3 + ', ' + value_y3 + ');\n';
  return code;
}

javascriptGenerator.forBlock['input_mouse_x'] = function() {
  const code = 'mouseX';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['input_mouse_y'] = function() {
  const code = 'mouseY';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['input_mouse_button_press'] = function() {
  const code = 'mouseIsPressed';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['input_key_press'] = function() {
  const code = 'keyIsPressed';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['input_key_last'] = function() {
  const code = 'key';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['input_mouse_button_last'] = function() {
  const code = 'mouseButton';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['input_set_target_fps'] = function(block, generator) {
  const value_framerate = generator.valueToCode(block, 'FRAMERATE', Order.ATOMIC);
  const code = 'frameRate(' + value_framerate + ');\n';
  return code;
}

javascriptGenerator.forBlock['input_get_target_fps'] = function() {
  const code = 'getTargetFrameRate()';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['input_get_current_fps'] = function() {
  const code = 'frameRate()';
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['input_get_delta_time'] = function() {
  const code = 'deltaTime';
  return [code, Order.NONE];
}