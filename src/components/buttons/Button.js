import React from "react";

const Button = ({ handleClick, value, index }) => (
  <button
    onClick={handleClick}
    type={value === "=" ? "submit" : "text"}
    className={"btn" + index}
    value={value}
  >
    {value}
  </button>
);

export default Button;
