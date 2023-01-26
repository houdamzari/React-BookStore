import React, { useEffect } from "react";
import BookForm from "../BookForm/BookForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/books/booksReducer";
import Book from "../Book/Book";
function Books(props) {
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {books.map((book) => (
        <Book
          id={book.id}
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}

      <BookForm />
    </>
  );
}

export default Books;
