import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkStatus } from "../../redux/categories/categoriesReducer";
function Categories(props) {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    const { payload } = dispatch(checkStatus());
    setStatus(payload);
  };
  return (
    <>
      <button onClick={handleClick}>Check Status</button>
      <h2>{status}</h2>
    </>
  );
}

export default Categories;
