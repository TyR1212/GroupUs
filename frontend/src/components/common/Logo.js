import React from "react";
import { useHistory } from "react-router-dom";

const Logo = ({ size }) => {
  const history = useHistory();

  const goToHome = () => {
    if (size === "small-logo") {
      history.push("/");
    }
  }
  
  return <header className={size} onClick={goToHome}>GroupUs</header>;
};

export default Logo;
