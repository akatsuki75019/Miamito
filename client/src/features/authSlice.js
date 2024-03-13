import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    token: token ?? "",
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = "";
    },
  },
});

export const { loginSuccess, logout } = authReducer.actions;

export default authReducer.reducer;
