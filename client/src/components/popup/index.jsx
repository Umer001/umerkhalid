import { Modal } from "flowbite-react";
import React, { useEffect } from "react";

const Popup = ({ children, isClose, isOpen }) => {
  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden", "pr-[15px]")
      : document.body.classList.remove("overflow-hidden", "pr-[15px]");
  }, [isOpen]);

  return (
    <>
      <React.Fragment>
        <Modal show={isOpen} size="md" popup={true} onClose={isClose}>
          <Modal.Header />

          <Modal.Body>{children}</Modal.Body>
        </Modal>
      </React.Fragment>
      <div id="recaptcha-container"></div>
    </>
  );
};

export default Popup;
