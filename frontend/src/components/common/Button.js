import React from "react";

const Button = ({ text, size, clickEvent }) => {
  return <button className={size + "-btn"} onClick={clickEvent}>{text}</button>;
};

export default Button;
