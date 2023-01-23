import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/navigation.css";

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const profilePage = location.pathname === "/profile";
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav className="nav_container">
        <Link
          className={`nav_link ${profilePage ? "nav_active" : ""}`}
          to={"/profile"}
        >
          Profile
        </Link>
        <Link
          className={`nav_link ${!profilePage ? "nav_active" : ""}`}
          to={"/dashboard/members"}
        >
          Users
        </Link>
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          className="nav_btn nav_link"
          onClick={() => logOut()}
        >
          Log out
        </button>

        {/*  */}
      </nav>
    </>
  );
}

export default Navigation;
