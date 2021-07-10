import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h2>Modal Component</h2>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "green",
          },
        }}
      >
        <h2>Judul Modal</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
}

export default ModalPage;
