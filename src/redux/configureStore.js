import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/booksReducer";
import categoriesReducer from "./categories/categoriesReducer";

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
