import { templator } from '../../modules/Templator';
import VirtualDom from '../../modules/VirtualDom';
import template from './template';
import BaseComponent from '../../modules/BaseComponent';
import { IChatContext } from './types';

const vdom = new VirtualDom();

export default class Chat extends BaseComponent<IChatContext> {
  rerender() {
    const newTree = vdom.createTree(template, this.props);
    const patches = templator.diff(this.element, newTree);

    templator.patch(patches);
  }

  render() {
    return vdom.createTree(template, this.props);
  }
}