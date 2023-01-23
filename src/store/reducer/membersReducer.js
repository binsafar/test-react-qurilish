import { createSlice } from "@reduxjs/toolkit";

const membersReducers = createSlice({
  name: "members",
  initialState: {
    members: null,
    membersFilter: null,
  },
  reducers: {
    getMembers: (state, action) => {
      state.members = action.payload;
    },
    getFiltered: (state, action) => {
      state.membersFilter = action.payload;
    },
  },
});

export const { getMembers, getFiltered } = membersReducers.actions;
export default membersReducers.reducer;
