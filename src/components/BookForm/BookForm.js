import React from "react";
import { ADD_BOOK } from "../../redux/books/booksReducer";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import "./BookForm.css";
function BookForm(props) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const submitHandler = (e) => {
    e.preventDefault();
    const addedBook = {
      ...books,
      id: uuid(),
      title: e.target[0].value,
      author: e.target[1].value,
    };
    dispatch(ADD_BOOK(addedBook));
    document.querySelector(".add__book-input").value = "";
    document.querySelector(".add__book-select").value = "";
  };
  return (
    <form className="add__book-form" onSubmit={submitHandler}>
      <input
        type="text"
        name=""
        placeholder="Book title"
        className="add__book-input"
        required
      />
      <select name="Author" id="" className="add__book-select" required>
        <option value="action">Action</option>
        <option value="science-fiction">Science-Fiction</option>
        <option value="economy">Economy</option>
      </select>
      <button className="add__book-btn">ADD BOOK</button>
    </form>
  );
}

export default BookForm;
