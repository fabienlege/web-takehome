import { createSlice } from "@reduxjs/toolkit";
import generateUsers from "data/users";
import { IUsersState } from "./interfaces/IUsersState";

const initialState: IUsersState = {
  users: generateUsers()
}

export const UsersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {

  }
})

export default UsersSlice.reducer;