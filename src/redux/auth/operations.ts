import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

import { User } from "../../types";
import { RegisterPayload } from "./slice";
import { RootState } from "../store";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const notify = () => toast.error("Invalid email or password. Try again");

// ** add JWT
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// ** remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk<RegisterPayload, User>(
  "auth/register",
  async (credentials: User, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        // Якщо error є об'єктом Error, доступ до error.message буде безпечним
        return thunkAPI.rejectWithValue(error.message);
      } else {
        // Якщо це інший тип помилки, повернемо стандартне повідомлення
        return thunkAPI.rejectWithValue("Something went wrong");
      }
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk<RegisterPayload, User>(
  "auth/login",
  async (credentials: Omit<User, "name">, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      notify();
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.fulfillWithValue("Something went wrong");
      }
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
});

export const refreshUser = createAsyncThunk<User, void, { state: RootState }>(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    try {
      if (state.auth.token) {
        setAuthHeader(state.auth.token);
      } else {
        return;
      }
      const resp = await axios.get("/users/current");
      return resp.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue("Something went wrong");
      }
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      return state.auth.token !== null;
    },
  }
);
