import React, { useState, useEffect } from "react";

const Increment = ({onChange}) => {
  const [num, setNum] = useState(3);
  const [isInputValid, setIsInputValid] = useState(true);
  const MAX = 999, MIN = 1;

  const inputValueHandler = (e) => {
    if (!isNaN(e.target.value))
      setNum(e.target.value);
  };
  
  useEffect(() => {
    if (num > MAX || num < MIN)
      setIsInputValid(false);
    else {
      onChange(num);
      setIsInputValid(true);
    }
  }, [num]);

  const addOne = (e) => {
    e.preventDefault();

    if (num >= MAX)
      setNum(MAX);
    else if (num < MIN)
      setNum(MIN);
    else
      setNum(parseInt(num) + 1);
  };

  const subtractOne = (e) => {
    e.preventDefault();

    if (num > MAX)
      setNum(MAX);
    else if (num <= MIN)
      setNum(MIN);
    else
      setNum(parseInt(num) - 1);
  };

  return (
    <div>
      <h3>Max users per group</h3>
      <input className={`increment-input ${isInputValid ? "" : "invalid-input"}`} value={num} onChange={inputValueHandler}></input>
      <button className="increment-btn" onClick={addOne}>+</button>
      <button className="increment-btn" onClick={subtractOne}>-</button>
    </div>
  );
};

export default Increment;
