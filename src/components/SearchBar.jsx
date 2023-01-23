import { Link, useParams } from "react-router-dom";
import { Formik } from "formik";
import "./css/searchBar.css";
import EditData from "./EditData";
import filterUsers from "../service/filterUsers";
import { getMembers } from "../store/reducer/membersReducer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function SearchBar() {
  const params = useParams();
  const members = params.name === "members";
  const users = useSelector((state) => state.membersReducer.members);
  const [inVal, setInVal] = useState({});

  useEffect(() => {}, [inVal]);

  return (
    <div className="search_container">
      <div className="search_top">
        <aside className="search_top_links">
          <Link
            className={`search_link ${members ? "search_link_active" : ""}`}
            to={"/dashboard/members"}
          >
            Members
          </Link>
          <Link
            className={`search_link ${!members ? "search_link_active" : ""}`}
            to={"/dashboard/admins"}
          >
            Admins
          </Link>
        </aside>
        <EditData data={[{}]} type={"add"} />
      </div>

      <div className="search_bottom">
        <Formik
          initialValues={{ name: "", email: "", phone: "", status: "All" }}
          validate={(values) => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            let filteredData = filterUsers(
              values.name,
              values.email,
              values.phone,
              values.status,
              users
            );
            console.log(filteredData);
            getMembers(filteredData);
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
            <form onSubmit={handleSubmit} className="search_form">
              <input
                className="search_input"
                placeholder="Name"
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <input
                className="search_input"
                placeholder="Email"
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <input
                className="search_input"
                placeholder="Phone number"
                type="number"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <select
                className="search_select"
                name="status"
                id="status"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
              >
                <option value="" disabled hidden>
                  Select status
                </option>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <button
                className="btn search_btn"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SearchBar;
