import { useEffect } from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";

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
    </>
  );
};
export default Dashboard;
