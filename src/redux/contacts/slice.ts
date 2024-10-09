import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { logOut } from "../auth/operations";

import { IContact } from "../../types";

interface IContactsState {
  items: IContact[] | [];
  loading: boolean;
  error: null | string;
}

const initialState: IContactsState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state: IContactsState) => {
  state.loading = true;
};

const handleRejected = (
  state: IContactsState,
  action: PayloadAction<string | undefined>
) => {
  state.loading = false;
  state.error = action.payload || "Unknow error";
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<IContact[]>) => {
          state.loading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<IContact>) => {
          state.loading = false;
          state.error = null;
          state.items = [...state.items, action.payload];
        }
      )
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<IContact>) => {
          state.loading = false;
          state.error = null;
          const index = state.items.findIndex(
            (contact) => contact.id === action.payload.id
          );
          state.items.splice(index, 1);
        }
      )
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(editContact.pending, handlePending)
      .addCase(
        editContact.fulfilled,
        (state, action: PayloadAction<IContact>) => {
          state.loading = false;
          state.error = null;
          const index = state.items.findIndex(
            (contact) => contact.id === action.payload.id
          );
          state.items.splice(index, 1, action.payload);
        }
      );
  },
});

export default contactsSlice.reducer;
