import { useState } from "react";
import { EditIcon } from "../assets/icons/icons";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function EditData({ data }) {
  const [modal, setModal] = useState(false);
  const editRequest = () => {
    setModal(false);
    console.log(data);
  };
  return (
    <>
      <button onClick={() => setModal(true)} className="btn">
        <EditIcon />
      </button>
      <Modal show={modal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => editRequest()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditData;
