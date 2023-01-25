import React from "react";
import Book from "../Book/Book";
import BookForm from "../BookForm/BookForm";
import { useSelector } from "react-redux";
function Books(props) {
  const { books } = useSelector((state) => state.books);
  const booklist = books.map((book) => <Book key={book.id} {...book} />);
  return (
    <div>
      {booklist}
      <BookForm />
    </div>
  );
}

export default Books;
