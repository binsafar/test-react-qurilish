import {
  CREATE_MEMBER,
  GET_MEMBERS,
  GET_MEMBER_ID,
  UPDATE_MEMBERS,
  DELETE_MEMBER,
} from "../actions/memberActions";

const initialState = {
  loading: false,
  members: [],
};

const membersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Set loading
    case CREATE_MEMBER:
      break;
    case GET_MEMBERS:
      break;
    case GET_MEMBER_ID:
      break;
    case UPDATE_MEMBERS:
      break;
    case DELETE_MEMBER:
      break;
    default:
      break;
  }
};

export default membersReducer;
