/* eslint-disable react/prop-types */
import React from "react";
import "./Book.css";
import { useDispatch } from "react-redux";
import { REMOVE_BOOK } from "../../redux/books/booksReducer";
import progressCircles from "../../assets/imgs/progressCircles.png";
function Book({ id, category, title, author, progress, chapter }) {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book__info">
        <span className="book__span">{category}</span>
        <h2>{title}</h2>
        <span className="book-author">{author}</span>

        <div className="book__info-buttons">
          <button className="book__info-btn">Comments </button>
          <span>|</span>
          <button
            className="book__info-btn"
            onClick={() => dispatch(REMOVE_BOOK(id))}
          >
            Remove
          </button>
          <span>|</span>

          <button className="book__info-btn">Edit</button>
        </div>
      </div>
      <div className="book__progress">
        <div className="book__progress-circular-progress-container">
          <div className="book__progress-circular-progress" />
        </div>
        <div className="book__progress-container">
          <p className="book__progress-container-percenatge">{progress} %</p>
          <p className="book__progress-container-percenatge-complete">
            Completed
          </p>
        </div>
      </div>
      <div>
        <p className="book__current-chapter">CURRENT CHAPTER</p>
        <p className="book__current-heading">{chapter}</p>
        <button className="book__current-btn"> UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;
