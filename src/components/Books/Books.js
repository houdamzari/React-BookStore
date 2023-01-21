import React from "react";
import Book from "../Book/Book";
import BookForm from "../BookForm/BookForm";

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
        <BookForm />
      </div>
    </div>
  );
}

export default Books;
