import React from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const GoBackButton = ({ text, size, clickEvent }) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <nav>
      <Button text="Go Back" size="short" clickEvent={goBack} />
    </nav>
  );
};

export default GoBackButton;
