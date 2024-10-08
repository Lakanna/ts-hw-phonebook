import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global";

const notifyAddContact = (name) =>
  toast.success(`Contact ${name} successfully added`);
const notifyDeleteContact = (name) =>
  toast.success(`Contact ${name} successfully deleted`);
const notifyEditContact = (name) =>
  toast.success(`Contact ${name} successfully edited`);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const respons = await axios.get("/contacts");
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      return state.auth.isLoggedIn === true;
    },
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const respons = await axios.post("/contacts", { ...contact });
      notifyAddContact(respons.data.name);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const respons = await axios.delete(`/contacts/${contactId}`);
      notifyDeleteContact(respons.data.name);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const resp = await axios.patch(`/contacts/${id}`, { name, number });
      notifyEditContact(name);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
