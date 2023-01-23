import request from "../../service/request";

export const getAllMembers = () => {
  request
    .get("/members")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
