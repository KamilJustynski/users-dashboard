import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users, UserState } from "../helpers/Interfaces";

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action: PayloadAction<Users[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const selectedUsersState = (state: { users: UserState }) => state.users;
export const selectData = (state: { users: UserState }) =>
  selectedUsersState(state).data;
export const selectLoading = (state: { users: UserState }) =>
  selectedUsersState(state).loading;
export const selectError = (state: { users: UserState }) =>
  selectedUsersState(state).error;

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } =
  userSlice.actions;

export default userSlice.reducer;
