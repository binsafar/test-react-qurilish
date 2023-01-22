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

  let users = [
    {
      id: 1,
      photo: undefined,
      name: "George Lindelof",
      mobile: "+43152362",
      email: "carlsen@armand.io",
      status: "true",
      operation: "2 min ago",
    },
    {
      id: 2,
      photo: undefined,
      name: "George Lindelof",
      mobile: "+43152362",
      email: "carlsen@armand.io",
      status: "false",
      operation: "2 min ago",
    },
  ];
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Navigation />
        <br />
        <div style={{ width: "82%" }}>
          <SearchBar />
          <TableList users={users} />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
