import { useState } from "react";
import { EditIcon, UploadIcon } from "../assets/icons/icons";
import { Modal } from "react-bootstrap";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import "./css/editData.css";

function EditData({ data }) {
  const [modal, setModal] = useState(false);
  const editRequest = (values) => {
    console.log(values);
    setModal(false);
  };
  console.log(data);
  return (
    <>
      <button onClick={() => setModal(true)} className="btn">
        <EditIcon />
      </button>
      <Modal
        centered
        show={modal}
        // show={true}
        onHide={() => setModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: data.name || "",
              phone: data.phone || "",
              email: data.email || "",
              status: data.status || "",
              photo: data.photo || "",
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
                    required
                  />
                </label>
                <label htmlFor="number">
                  Phone
                  <br />
                  <input
                    id="number"
                    type="text"
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
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Status
                  </label>
                  <br />
                  <input
                    id="flexSwitchCheckChecked"
                    name="status"
                    type="checkbox"
                    value={values.status}
                    className="form-check-input edit_check"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <label htmlFor="inputTag">
                  Photo
                  <div className="edit_upload">
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
