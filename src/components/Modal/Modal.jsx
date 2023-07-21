import modalStyles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import doneImage from "../../images/done.svg";

const Modal = () => {
    return (
        <div className={modalStyles.modalWindow}>
            <div className={modalStyles.closeIcon}><CloseIcon  type="primary" /></div>
            <p className=" text text_type_digits-large mt-30">034536</p>
            <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
            <img className="mt-15" src={doneImage}  alt="done" />
            <p className="text text_type_main-small">Ваш заказ начали готовить</p>
        </div>
        
    )
}

export default Modal;