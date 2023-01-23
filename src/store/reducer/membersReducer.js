import { createSlice } from "@reduxjs/toolkit";

const membersReducers = createSlice({
  name: "members",
  initialState: {
    members: null,
  },
  reducers: {
    getMembers: (state, action) => {
      state.members = action.payload;
    },
  },
});

export const { getMembers } = membersReducers.actions;
export default membersReducers.reducer;
