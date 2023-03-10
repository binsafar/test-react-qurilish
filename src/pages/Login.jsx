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
          onSubmit={(values, { setSubmitting }) => {
            if (values.name === "name" && values.password === "name") {
              localStorage.setItem("login", true);
              navigate("/dashboard/members");
            }
            setSubmitting(false);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="login_form">
              <input
                type="text"
                name="name"
                autoFocus
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
