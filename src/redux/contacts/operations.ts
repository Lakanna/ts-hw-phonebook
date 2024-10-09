import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

import { IContact } from "../../types";
import { RootState } from "../store";

axios.defaults.baseURL = "https://connections-api.goit.global";

const notifyAddContact = (name: string) =>
  toast.success(`Contact ${name} successfully added`);
const notifyDeleteContact = (name: string) =>
  toast.success(`Contact ${name} successfully deleted`);
const notifyEditContact = (name: string) =>
  toast.success(`Contact ${name} successfully edited`);

export const fetchContacts = createAsyncThunk<
  IContact[],
  void,
  { state: RootState }
>(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const respons = await axios.get("/contacts");
      return respons.data;
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
      return state.auth.isLoggedIn === true;
    },
  }
);

export const addContact = createAsyncThunk<IContact, Omit<IContact, "id">>(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const respons = await axios.post("/contacts", { ...contact });
      notifyAddContact(respons.data.name);
      return respons.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue("Something went wrong");
      }
    }
  }
);

export const deleteContact = createAsyncThunk<Omit<IContact, "id">, string>(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const respons = await axios.delete(`/contacts/${contactId}`);
      notifyDeleteContact(respons.data.name);
      return respons.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue("Something went wrong");
      }
    }
  }
);

export const editContact = createAsyncThunk<IContact, IContact>(
  "contacts/editContact",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const resp = await axios.patch(`/contacts/${id}`, { name, number });
      notifyEditContact(name);
      return resp.data;
    } catch (error) {
      if (error instanceof Error)
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);
