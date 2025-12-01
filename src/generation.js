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
  const code = statement_code;
  return code;
}

javascriptGenerator.forBlock['console_log'] = function(block, generator) {
  const value_text = generator.valueToCode(block, 'TEXT', Order.ATOMIC);
  const code = 'rhinobloxConsoleFunctions.log(' + value_text + ');\n';
  return code;
}

javascriptGenerator.forBlock['console_clear'] = function(block, generator) {
  const code = 'rhinobloxConsoleFunctions.clear();\n';
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

javascriptGenerator.forBlock['console_log_color'] = function(block, generator) {
  const value_text = generator.valueToCode(block, 'TEXT', Order.ATOMIC);
  const value_color = generator.valueToCode(block, 'COLOR', Order.ATOMIC);
  const code = 'rhinobloxConsoleFunctions.logColor(' + value_text + ', ' + value_color + ');\n';
  return code;
}

javascriptGenerator.forBlock['console_get'] = function(block, generator) {
  const code = 'rhinobloxConsoleFunctions.get()';
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