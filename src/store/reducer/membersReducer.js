import {
  CREATE_MEMBER,
  GET_MEMBERS,
  UPDATE_MEMBERS,
  DELETE_MEMBER,
} from "../actions/memberActions";

const initialState = {
  members: [],
};

const membersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Set loading
    case CREATE_MEMBER:
      return {
        ...state,
        members: payload,
      };
    case GET_MEMBERS:
      return {
        ...state,
        members: payload,
      };
    case UPDATE_MEMBERS:
      return {
        ...state,
        members: payload,
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: payload,
      };
    default:
      break;
  }
};

export default membersReducer;
