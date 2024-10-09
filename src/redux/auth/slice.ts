import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

import { User } from "../../types";

interface AuthState{
  user: {
    name: null|string,
    email: null|string,
  },
  token: null|string,
  isLoggedIn: boolean,
  isRefreshing: boolean,
}



export interface RegisterPayload{
  user: User;
  token: string;
}

const initialState:AuthState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action: PayloadAction<RegisterPayload>) => {
               state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action: PayloadAction<RegisterPayload>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;


// hahaha@ukr.net


