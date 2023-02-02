import { Modal } from "flowbite-react";
import React from "react";

const Popup = ({ children, isClose, isOpen }) => {
  return (
    <React.Fragment>
      <Modal show={isOpen} size="md" popup={true} onClose={isClose}>
        <Modal.Header />

        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Popup;
