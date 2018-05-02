// package
// import 'babel-polyfill';

// local
import '../assets/common/common.less';
import Modal from './component/modal';
import Message from './component/message';
import ModalInfo from './component/modalInfo';
import Spin from './component/spin';
// import Icon from './container/icon';
// import scrollBind from './utils/scrollBind';
// import treeTableMobile from './component/treeTable/mobile';
// import treeMobile from './component/tree/mobile';
// import tableMobile from './component/table/mobile';

// import treeTablePC from './component/treeTable/pc';
// import tablePC from './component/table/pc';
// import treePC from './component/tree/pc';

// import Button from './container/button';
// import Dom from './utils/dom';

// const { isMobile } = Dom;

console.log('version: 1.0.10');

const Component = {
  Message,
  Spin,
  Modal,
  ModalInfo,
  // Button,
  // Icon,
  // scrollBind,
  // pc: {
  //   message: Message,
  //   spin: Spin,
  //   modal: Modal,
  //   table: isMobile() ? tableMobile : tablePC,
  //   tree: isMobile() ? treeMobile : treePC,
  //   treeTable: isMobile() ? treeTableMobile : treeTablePC,
  //   // modalInfo: ModalInfo,
  // },
  // mobile: {
  //   spin: Spin,
  //   modal: Modal,
  //   message: Message,
  //   modalInfo: ModalInfo,
  // },
};

window.top.Component = Component;

export default Component;
