import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.Loading;
export const selectError = (state) => state.contacts.error;

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
