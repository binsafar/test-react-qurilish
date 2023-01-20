import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import logoImg from "../assets/icons/logo.png";
import "./css/login.css";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="login_container">
      <aside className="login_form">
        <h1 className="login_form_h1">Log in</h1>

        <Formik
          initialValues={{ name: "", password: "", contacts: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name || !values.password) {
              errors.name = "invalid name";
            }
            console.log(errors);
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.name === "name" && values.password === "name") {
              console.log(values);
              localStorage.setItem("login", true);
              navigate("/dashboard");
            } else {
            }
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
          }) => (
            <form onSubmit={handleSubmit} className="login_form">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="form-control login_input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <input
                placeholder="Contact"
                type="contact"
                name="contacts"
                className="form-control login_input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts}
              />
              <input
                required
                placeholder="Password"
                type="password"
                name="password"
                className="form-control login_input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <button
                className="btn btn-primary login_btn"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </form>
          )}
        </Formik>
      </aside>
      <aside className="login_logo">
        <img src={logoImg} alt="logo" />
      </aside>
    </div>
  );
};
export default Login;
