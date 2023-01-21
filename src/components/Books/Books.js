import React from "react";
import Book from "../Book/Book";

function Books(props) {
  return (
    <div className="wrapper">
      <div className="books">
        <Book
          type="Action"
          title="The Hunger Games"
          author="Suzanne Collins"
          chapter="Chapter 17"
          progress="64"
        />
        <Book
          type="Science-Fiction"
          title="Dune"
          author="Frank Herbert"
          chapter="3: `A Lesson Learned`"
          progress="8"
        />
        <Book
          type="Economy"
          title="Capital in the Twenty-First Century"
          author="Suzanne Collins"
          chapter="Introduction"
          progress="0"
        />

        <hr />
        <h2 className="add__book-heading">Add new Book </h2>

        <div className="add__book">
          <input
            type="text"
            name=""
            placeholder="Book title"
            className="add__book-input"
          />
          <select name="Action" id="" className="add__book-select">
            <option value="action">Action</option>
            <option value="science-fiction">Science-Fiction</option>
            <option value="economy">Economy</option>
          </select>
          <button className="add__book-btn">Add book</button>
        </div>
      </div>
    </div>
  );
}

export default Books;
