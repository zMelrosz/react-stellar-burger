import modalStyles from "./Modal.module.css";

const Modal = ( {content, isOpen} ) => {
    return isOpen && (
        <div className={modalStyles.modalWindow}>
            {content}
        </div>
    )
}

export default Modal;