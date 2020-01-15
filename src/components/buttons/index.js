import React from "react";
import Button from "./Button";

const Buttons = ({ handleClick }) => {
  const values = [
    "AC",
    "/",
    "*",
    1,
    2,
    3,
    "+",
    4,
    5,
    6,
    "-",
    7,
    8,
    9,
    "=",
    0,
    "."
  ];

  return values.map((value, index) => (
    <Button handleClick={handleClick} index={index} value={value} key={value} />
  ));
};

export default Buttons;
