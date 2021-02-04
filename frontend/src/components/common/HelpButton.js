import React from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const HelpButton = ({ text, size, clickEvent }) => {
  const history = useHistory();

  const goToHelp = () => {
    history.push("/help");
  };

  return (
    <nav>
      <Button text="Help" size="short" clickEvent={goToHelp} />
    </nav>
  );
};

export default HelpButton;
