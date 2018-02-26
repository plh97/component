import '../assets/common/common.less';
import Modal from './component/modal';
import Message from './component/message';
import ModalInfo from './component/modalInfo';
import Spin from './component/spin';
import table from './component/table';
import treeTable from './component/treeTable';
import tree from './component/tree';
import Button from './container/button';
import Icon from './container/icon';
import scrollBind from './utils/scrollBind.js';


const Component = {
  Message,
  Spin,
  Modal,
  ModalInfo,
  Button,
  Icon,
  scrollBind,
  pc: {
    message: Message,
    spin: Spin,
    modal: Modal,
    table,
    tree,
    treeTable,
    modalInfo: ModalInfo,
    container: {
      button: Button,
      icon: Icon,
    },
  },
  mobile: {
    message: Message,
    spin: Spin,
    modal: Modal,
    modalInfo: ModalInfo,
    container: {
      button: Button,
      icon: Icon,
    },
  },
};
window.Component = Component;
// export default Component;
