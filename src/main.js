


// local
import '../assets/common/common.less';
import Modal from './component/modal';
import Message from './component/message';
import ModalInfo from './component/modalInfo';
import Spin from './component/spin';
import Icon from './container/icon';
// import scrollBind from './utils/scrollBind';
import treeTablePC from './component/treeTable/pc';
import tablePC from './component/table/pc';
import treePC from './component/tree/pc';
import treeMobile from './component/tree/mobile';
import Button from './container/button';
import Dom from './utils/dom';

const { isMobile } = Dom;

console.log('isMobile,',isMobile());

const Component = {
  Message,
  Spin,
  Modal,
  ModalInfo,
  Button,
  Icon,
  // scrollBind,
  pc: {
    message: Message,
    spin: Spin,
    modal: Modal,
    table: tablePC,
    tree: isMobile() ? treeMobile : treePC,
    treeTable: treeTablePC,
    modalInfo: ModalInfo,
  },
  mobile: {
    message: Message,
    spin: Spin,
    modal: Modal,
    modalInfo: ModalInfo,
  },
};

window.Component = Component

export default Component;
