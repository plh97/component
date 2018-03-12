import '../assets/common/common.less';
import Modal from './component/modal';
import Message from './component/message';
import ModalInfo from './component/modalInfo';
import Spin from './component/spin';
import table from './component/table';
import treeTable from './component/treeTable';
import treePC from './component/tree/pc';
import Button from './container/button';
import Icon from './container/icon';
import scrollBind from './utils/scrollBind';


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
    tree: treePC,
    treeTable,
    modalInfo: ModalInfo,
  },
  mobile: {
    message: Message,
    spin: Spin,
    modal: Modal,
    modalInfo: ModalInfo,
  },
};
window.Component = Component;
export default Component;
