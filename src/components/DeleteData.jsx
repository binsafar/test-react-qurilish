import { DeleteIcon } from "../assets/icons/icons";
import { useState } from "react";

import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./css/deleteData.css";
import { useDispatch } from "react-redux";
import { DELETE_MEMBER, GET_MEMBERS } from "../store/actions/membersActions";
import { deleteMember } from "../store/api/membersApi";

function DeleteData({ id, name }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const deleteRequest = () => {
    deleteMember(id);
    dispatch({ type: GET_MEMBERS });
    setModal(false);
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
        className="modal_open"
        onHide={() => setModal(false)}
      >
        <Modal.Header className="modal_header" closeButton>
          <p className="modal_title">
            Are you sure to delete <span className="modal_name">{name}</span> ?
          </p>
        </Modal.Header>
        <Modal.Body className="modal_body">
          <Button
            className="modal_btn"
            variant="primary"
            onClick={() => deleteRequest()}
          >
            Ok
          </Button>
          <Button
            className="modal_btn"
            variant="light"
            onClick={() => setModal(false)}
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteData;
