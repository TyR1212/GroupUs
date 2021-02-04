//this file allows you to share state data between different components that aren't children of each other
import React, { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={[users, setUsers]}>
      {props.children}
    </UsersContext.Provider>
  );
};
