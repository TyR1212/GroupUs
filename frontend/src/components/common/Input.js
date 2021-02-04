import React from "react";

const Input = ({ placeholder, type, size, value, onChange }) => {
  return (
    <input
      className={size + "-inp"}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
  ></input>
  );
};

export default Input;
