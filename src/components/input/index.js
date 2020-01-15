import React from "react";

const Input = ({ target }) => (
  <input
    type='text'
    className='input'
    value={target}
    placeholder='0'
    name='result'
    readOnly
  />
);

export default Input;
