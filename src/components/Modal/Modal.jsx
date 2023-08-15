import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import modalStyles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({ children, closeModal }) => {
  const [modalRoot, setModalRoot] = React.useState(null);

  React.useEffect(() => {
    setModalRoot(document.getElementById("react-modals"));
  }, []);

  React.useEffect(() => {
    const handleEscDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscDown);

    return () => {
      document.removeEventListener("keydown", handleEscDown);
    };
  }, [closeModal]);

  return modalRoot
    ? createPortal(
        <>
          <ModalOverlay closeModal={closeModal} />
          <div className={modalStyles.modalWindow}>
            <div className={`${modalStyles.header} mt-10 ml-10`}>
              <h3 className={`${modalStyles.name} text text_type_main-large`}>
                Детали ингредиента
              </h3>
              <div className={`${modalStyles.pointer}`} onClick={closeModal}>
                <CloseIcon />
              </div>
            </div>
            {children}
          </div>
        </>,
        modalRoot
      )
    : null;
};

Modal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
