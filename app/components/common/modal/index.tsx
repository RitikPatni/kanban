import "./index.scss";

import { useEffect, useState } from "react";

import ModalHeader from "./header";

export interface IModalProps {
  closeModal: () => void;
  title: string;
  children: React.ReactNode;
  fullScreen: boolean;
  setFullScreen: (value: boolean) => void;
}

const Modal = ({
  closeModal,
  title,
  children,
  setFullScreen,
  fullScreen,
}: IModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);
  return (
    <div className="modal">
      <div
        className={`modal__content ${fullScreen ? "modal__content--fullscreen" : ""}`}
      >
        <ModalHeader
          closeModal={closeModal}
          setFullScreen={setFullScreen}
          title={title}
        />
        {children}
      </div>
    </div>
  );
};
export default Modal;
