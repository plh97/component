
import answer from 'the-answer';
import Modal from "./component/modal";
import Message from "./component/message";
import ModalInfo from "./component/modalInfo";
import Button from "./container/button";
import Icon from "./container/icon";
import Spin from "./component/spin";

const Component = {
    message: Message,
    spin: Spin,
    container: {
        button: Button,
        icon: Icon,
    },
    modal:{
        modal: Modal,
        info: ModalInfo
    }
}

console.log(`the answer is ${answer} ${Component}`);

