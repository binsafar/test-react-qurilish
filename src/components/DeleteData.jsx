import { DeleteIcon } from "../assets/icons/icons";
import { useState } from "react";

import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function DeleteData({ id, name }) {
  const [modal, setModal] = useState(false);

  const deleteRequest = () => {
    setModal(false);
    console.log(id);
  };
  return (
    <>
      <button onClick={() => setModal(true)} className="btn">
        <DeleteIcon />
      </button>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modal}
        onHide={() => setModal(false)}
      >
        <Modal.Title>
          Are you sure to delete <span>{name}</span>
        </Modal.Title>
        <Button variant="primary" onClick={() => deleteRequest()}>
          Ok
        </Button>
        <Button variant="light" onClick={() => setModal(false)}>
          Cancel
        </Button>
      </Modal>
    </>
  );
}

export default DeleteData;
