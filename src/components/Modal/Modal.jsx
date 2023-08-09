import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import modalStyles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const Modal = ({ content, isOpen, closeModal }) => {
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

  return isOpen
    ? createPortal(
        <>
          <ModalOverlay closeModal={closeModal} />
          <div className={modalStyles.modalWindow}>{content}</div>
        </>,
        modalRoot
      )
    : null;
};

Modal.propTypes = {
  content: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};


export default Modal;
