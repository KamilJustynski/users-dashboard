import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersGeo {
  lat: string;
  lng: string;
}

interface UsersAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UsersGeo;
}

interface UsersCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UsersAddress;
  phone: string;
  website: string;
  company: UsersCompany;
}

interface UserState {
  data: Users | null;
  loading: boolean;
  error: string | null;
}

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
    fetchUsersSuccess: (state, action: PayloadAction<Users>) => {
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
