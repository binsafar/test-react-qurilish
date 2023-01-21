import { useEffect } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header />
      <Navigation />
    </>
  );
};

export default Profile;
