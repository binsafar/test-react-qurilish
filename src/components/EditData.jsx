import { useState } from "react";
import { EditIcon, UploadIcon } from "../assets/icons/icons";
import { Modal } from "react-bootstrap";
import { Formik } from "formik";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { GET_MEMBERS } from "../store/actions/membersActions";

import "./css/editData.css";
import { createMember, updateMember } from "../store/api/membersApi";
import { useParams } from "react-router-dom";

function EditData({ data, type }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();

  const editRequest = (values) => {
    if (type === "edit") {
      updateMember(
        data.id,
        { ...values, phone: values.phone },
        `${params.name === "members" ? "members" : "admins"}`
      );
      dispatch({
        type: GET_MEMBERS,
        payload: `${params.name === "members" ? "members" : "admins"}`,
      });
    } else {
      createMember(
        values,
        `${params.name === "members" ? "members" : "admins"}`
      );
      dispatch({
        type: GET_MEMBERS,
        payload: `${params.name === "members" ? "members" : "admins"}`,
      });
    }
    setModal(false);
  };

  return (
    <>
      {/* editing modal */}
      {type && type === "edit" && (
        <button onClick={() => setModal(true)} className="btn">
          <EditIcon />
        </button>
      )}

      {/* add member modal */}
      {type && type === "add" && (
        <button onClick={() => setModal(true)} className="btn">
          Add member
        </button>
      )}

      {/* modal body */}
      <Modal centered show={modal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: data.name || "",
              phone: data.phone || "",
              email: data.email || "",
              status: data.status || false,
              photo: data.photo || "",
              operation: "2 min ago",
            }}
            validate={(values) => {
              const errors = {};
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              editRequest(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit} className="edit_form">
                <label htmlFor="name">
                  Name
                  <br />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="edit_input"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                    required
                  />
                </label>
                <label htmlFor="number">
                  Phone
                  <br />
                  <input
                    id="number"
                    type="number"
                    name="phone"
                    className="edit_input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    required
                  />
                </label>
                <label htmlFor="email">
                  Email
                  <br />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="edit_input"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                <div className="form-check form-switch">
                  <label
                    className="form-check-label edit_check_label"
                    htmlFor="status_check"
                  >
                    Status
                  </label>
                  <br />
                  <input
                    id="status_check"
                    name="status"
                    type="checkbox"
                    value={values.status}
                    checked={values.status}
                    className="form-check-input edit_check"
                    onChange={(event) => {
                      setFieldValue("status", event.target.checked);
                    }}
                    onBlur={handleBlur}
                  />
                </div>
                <label htmlFor="inputTag">
                  Photo
                  <div className="edit_upload_icon">
                    <UploadIcon />
                  </div>
                  <input
                    id="inputTag"
                    name="photo"
                    type="file"
                    className="edit_upload"
                    onChange={handleChange}
                    value={values.photo}
                    style={{ display: "none" }}
                    onBlur={handleBlur}
                    accept="image/png, image/jpg, image/gif, image/jpeg"
                  />
                </label>
                <section className="edit_actions">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                  >
                    Save
                  </Button>
                  <Button variant="light" onClick={() => setModal(false)}>
                    Cancel
                  </Button>
                </section>
              </form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditData;
