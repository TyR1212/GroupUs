//this file allows you to share state data between different components that aren't children of each other
import React, { useState, createContext } from "react";

export const ActivityContext = createContext();

export const ActivityProvider = (props) => {
  const [activity, setActivity] = useState([]);

  return (
    <ActivityContext.Provider value={[activity, setActivity]}>
      {props.children}
    </ActivityContext.Provider>
  );
};
