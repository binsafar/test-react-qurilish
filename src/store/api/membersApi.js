import axios from "axios";

export const getAllMembers = (memberAdmin = "members") => {
  return axios
    .get("http://localhost:8080/" + memberAdmin)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const createMember = (data, memberAdmin = "members") => {
  return axios
    .post("http://localhost:8080/" + memberAdmin, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const updateMember = (id, data, memberAdmin = "members") => {
  return axios
    .put("http://localhost:8080/" + memberAdmin + "/" + id, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const deleteMember = (id, memberAdmin = "members") => {
  return axios
    .delete("http://localhost:8080/" + memberAdmin + "/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
