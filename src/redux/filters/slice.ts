import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    number: "",
  },
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    changeFilterByNumber: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        number: action.payload,
      };
    },
  },
});

export const { changeFilter, changeFilterByNumber } = filtersSlice.actions;

export default filtersSlice.reducer;
