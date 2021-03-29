import React from "react";

const Input = ({ type, placeholder, value, changeHandler }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => changeHandler(e.target.value.toString())}
    />
  );
};

export default Input;
