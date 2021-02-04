import React from "react";

const CodeDisplay = ({ code }) => {
  return <input className="code-display" value={code} readOnly></input>;
};

export default CodeDisplay;
