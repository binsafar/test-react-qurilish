import request from "../../service/request";

export const getAllMembers = () => {
  request("/members");
};
