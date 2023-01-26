import types from "../types";
import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BaseUrl =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZJbWmU4CTqw6EO1GaSWt/books/";
const initialState = {
  books: [],
  loading: false,
  message: "",
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get(`${BaseUrl}`);
  const books = Object.entries(response.data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      Id: key,
      title,
      category,
      author,
    };
  });
  return books;
});

fetchData();

const addBook = (payload) => async () => {
  await fetch(`${BaseUrl}`, {
    method: POST,
    body: JSON.stringify(payload),
  });
  window.location.reload();
};

const removeBook = (payload) => async () => {
  await fetch(`${BaseUrl}/${payload}`, {
    method: DELETE,
  });
  window.location.reload();
};

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
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.msg = action.payload;
    });
  },
});
export const { ADD_BOOK, REMOVE_BOOK } = bookSlice.actions;
export default bookSlice.reducer;
