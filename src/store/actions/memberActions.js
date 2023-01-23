import {
  CREATE_MEMBER,
  GET_MEMBERS,
  DELETE_MEMBER,
  UPDATE_MEMBERS,
} from "./types/memberActionTypes";

export const getMembers = () => {
  return {
    type: GET_MEMBERS,
  };
};

export const createMember = (data) => {
  return {
    type: CREATE_MEMBER,
    payload: data,
  };
};

export const updateMembers = (data) => {
  return {
    type: UPDATE_MEMBERS,
    payload: data,
  };
};

export const deleteMembers = (id) => {
  return {
    type: DELETE_MEMBER,
    payload: id,
  };
};
