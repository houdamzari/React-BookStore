import types from "../types";
import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = {
  books: [
    {
      id: uuid(),
      title: "Book 2",
      category: "Action",
      author: "Houda MZARI",
    },
    {
      id: uuid(),
      title: "Book 3",
      category: "Science Fiction",
      author: "Houda MZARI",
    },
  ],
};

export const addBook = (addedBook) => ({
  type: types.ADD_BOOK,
  payload: addedBook,
});
export const removeBook = (id) => ({
  type: types.REMOVE_BOOK,
  payload: id,
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
