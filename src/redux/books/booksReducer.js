import types from "../types";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  books: [],
};

export const addBook = (addedBook) => ({ type: types.ADD_BOOK, addedBook });
export const removeBook = (id) => ({
  type: types.REMOVE_BOOK,
  id,
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    ADD_BOOK: (state, action) => {
      state.books = [...state.books, action.payload];
      return state;
    },
    REMOVE_BOOK: (state, action) => {
      state.books = [...state.books.filter((b) => b.id !== action.payload)];
      return state;
    },
  },
});
export const { ADD_BOOK, REMOVE_BOOK } = bookSlice.actions;
export default bookSlice.reducer;
