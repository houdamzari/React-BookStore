import React from "react";
import { ADD_BOOK } from "../../redux/books/booksReducer";
import { useDispatch, useSelector } from "react-redux";
function BookForm(props) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const submitHandler = (e) => {
    e.preventDefault();
    const addedBook = {
      ...books,
      id: 88,
      title: e.target[0].value,
      author: e.target[1].value,
    };
    dispatch(ADD_BOOK(addedBook));
    document.querySelector(".add__book-input").value = "";
    document.querySelector(".add__book-select").value = "";
  };
  return (
    <>
      <h2 className="add__book-heading">Add new Book </h2>

      <form className="add__book" onSubmit={submitHandler}>
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
        <button className="add__book-btn">Add book</button>
      </form>
    </>
  );
}

export default BookForm;
