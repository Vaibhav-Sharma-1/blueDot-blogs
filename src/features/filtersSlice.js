import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  sortBySearch: "title",
  sortByDate: "new",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTextFilter: (state, action) => {
      state.text = action.payload;
    },
    sortByTitle: (state) => {
      state.sortBySearch = "title";
    },
    sortByTitleAndDescription: (state) => {
      state.sortBySearch = "titleAndDescription";
    },
    sortByNew: (state) => {
      state.sortByDate = "new";
    },
    sortByPast: (state) => {
      state.sortByDate = "past";
    },
  },
});

export const {
  setTextFilter,
  sortByTitle,
  sortByTitleAndDescription,
  sortByNew,
  sortByPast,
} = filtersSlice.actions;

export default filtersSlice.reducer;
