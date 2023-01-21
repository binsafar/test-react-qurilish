import { useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import TableList from "../components/TableList";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Navigation />
        <br />
        <div style={{ width: "82%" }}>
          <SearchBar />
          <TableList />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
