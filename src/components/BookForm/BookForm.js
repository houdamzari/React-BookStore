import React from "react";

function BookForm(props) {
  return (
    <>
      <h2 className="add__book-heading">Add new Book </h2>

      <div className="add__book">
        <input
          type="text"
          name=""
          placeholder="Book title"
          className="add__book-input"
        />
        <select name="Author" id="" className="add__book-select">
          <option value="action">Action</option>
          <option value="science-fiction">Science-Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button className="add__book-btn">Add book</button>
      </div>
    </>
  );
}

export default BookForm;
