import { RootState } from "../store";

export const selectIsLoggedIn = (state:RootState) => state.auth.isLoggedIn;

export const selectUser = (state:RootState) => state.auth.user;

export const selectIsRefreching = (state:RootState) => state.auth.isRefreshing;
