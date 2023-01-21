import React from "react";

function Book({ type, title, author }) {
  return (
    <div className="book__info">
      <span>{type}</span>
      <h2>{title}</h2>
      <span>{author}</span>
    </div>
    <div>
        <FontAwesomeIcon icon="fa-duotone fa-spinner-third" />
    </div>
  );
}

export default Book;
