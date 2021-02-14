import './base-modal.scss';

import React, { useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { createPortal } from 'react-dom';

export interface IBaseModal {
  show: boolean;
  setShow: (val: boolean) => void;
}

const modalRoot = document.getElementById("modal");

export const BaseModal: React.FC<IBaseModal> = ({
  children,
  show,
  setShow,
}) => {
  const modalRef = useRef<HTMLDivElement>();
  if (!modalRef.current) {
    modalRef.current = document.createElement("div");
  }

  useEffect(() => {
    if (modalRef.current) {
      modalRoot?.appendChild(modalRef.current);
    }

    return () => {
      if (modalRef.current) {
        modalRoot?.removeChild(modalRef.current);
      }
    };
  });

  return createPortal(
    <Modal
      show={show}
      onHide={() => setShow(false)}
      contentClassName="bg-light-grey"
      centered
    >
      {children}
    </Modal>,
    modalRef.current
  );
};

export default BaseModal;
