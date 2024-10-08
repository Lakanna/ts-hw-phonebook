import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    number: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    changeFilterByNumber: (state, action) => {
      return {
        ...state,
        number: action.payload,
      };
    },
  },
});

export const { changeFilter, changeFilterByNumber } = filtersSlice.actions;

export default filtersSlice.reducer;
