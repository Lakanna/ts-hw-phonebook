import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

import { RootState } from "../store";

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectLoading = (state: RootState) => state.contacts.loading;
export const selectError = (state: RootState) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    const visibleContacts = contacts.filter((contact) => {
      return (
        contact.number.includes(filterName) ||
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      );
    });

    return visibleContacts;
  }
);
