// src/components/Square.js

import React from "react";
import "../App.css"

const Square = ({ vegetable }) => {
  return (
    <div className="squareStyle">
      <h2>{vegetable}</h2>
    </div>
  );
};

export default Square;
