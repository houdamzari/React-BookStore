import React from "react";
import "./Book.css";

import progressCircles from "../../assets/imgs/progressCircles.png";
function Book({ type, title, author, progress, chapter }) {
  return (
    <div className="book">
      <div className="book__info">
        <span className="book__span">{type}</span>
        <h2>{title}</h2>
        <span className="book-author">{author}</span>

        <div className="book__info-buttons">
          <button className="book__info-btn">Comments </button>
          <span>|</span>
          <button className="book__info-btn">Remove </button>
          <span>|</span>

          <button className="book__info-btn">Edit</button>
        </div>
      </div>
      <div className="book__progress">
        <img src={progressCircles} alt="" className="book__icon" />
        <h4 className="book__heading">
          {progress} %<span className="book__span">Completed</span>
        </h4>
      </div>
      <div>
        <span className="book__current-chapter">CURRENT CHAPTER</span>
        <h5 className="book__current-heading">{chapter}</h5>
        <button className="book__current-btn"> UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;
