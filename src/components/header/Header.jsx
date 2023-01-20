import defaultImg from "../../assets/img/default.png";
import "./css/header.css";

const Header = () => {
  return (
    <header className={"header"}>
      <p className={"header_logo"}>shaffof qurilish</p>

      <aside className={"header_right"}>
        <img className={"header_right_photo"} src={defaultImg} alt="profile" />
        <div className={"header_right_info"}>
          <p className={"header_right_name"}>Luke Asote</p>
          <p className={"header_right_role"}>Admin for Associations</p>
        </div>
        <i className="bi bi-caret-down-fill"></i>
      </aside>
    </header>
  );
};

export default Header;
