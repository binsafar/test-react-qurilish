import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import TableList from "../components/TableList";
import { useDispatch, useSelector } from "react-redux";
import { GET_MEMBERS } from "../store/actions/membersActions";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const members = useSelector((store) => store.membersReducer.members);

  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate("/");
    }
    dispatch({ type: GET_MEMBERS });
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Navigation />
        <br />
        <div style={{ width: "82%" }}>
          <SearchBar />
          <TableList users={members} />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
