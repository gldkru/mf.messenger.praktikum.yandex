import { templator } from "../../modules/Templator.js";
import { template } from "./template.js";
import BaseComponent from "../../modules/BaseComponent.js";
import VirtualDom from "../../modules/VirtualDom.js";
const vdom = new VirtualDom();
export default class Window extends BaseComponent {
    rerender() {
        const newTree = vdom.createTree(template, this.props);
        const patches = templator.diff(this.element, newTree);
        templator.patch(patches);
    }
    render() {
        return vdom.createTree(template, this.props);
    }
}
//# sourceMappingURL=index.js.map