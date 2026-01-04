import * as Blockly from "blockly/core";

class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }
  /**@override*/
  createContainer_() {
    const container = super.createContainer_();
    container.classList.add('customToolboxCategory');
    return container;
  }
  /**@override*/
  createIconDom_() {
    const icon = document.createElement('span');
    return icon;
  }
}

export { CustomCategory };