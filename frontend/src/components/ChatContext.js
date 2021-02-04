//this file allows you to share state data between different components that aren't children of each other
import React, { useState, createContext } from "react";

export const ChatContext = createContext();

export const ChatProvider = (props) => {
  const [chat, setChat] = useState([]);

  return (
    <ChatContext.Provider value={[chat, setChat]}>
      {props.children}
    </ChatContext.Provider>
  );
};
