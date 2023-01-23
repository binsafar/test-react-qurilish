import axios from "axios";

export const getAllMembers = () => {
  return axios
    .get("http://localhost:8080/members")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
