
import answer from 'the-answer';
import Modal from "./component/modal";
import Message from "./component/message";
import ModalInfo from "./component/modalInfo";
import Button from "./container/button/index.js";

const Component = {
    modal: Modal,
    modalInfo: ModalInfo,
    button: Button,
    message: Message
}

console.log(`the answer is ${answer} ${Component}`);

