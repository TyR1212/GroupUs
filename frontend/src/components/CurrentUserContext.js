//this file allows you to share state data between different components that aren't children of each other
import React, { useState, createContext } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  return (
    <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </CurrentUserContext.Provider>
  );
};
