import React, { useState, useContext, useEffect } from "react";
import { ChatContext } from "./../ChatContext";
import { CurrentUserContext } from "./../CurrentUserContext";
import ChatInfo from "../ChatInfo";

const ChatBox = ({ charCount, setCharCount }) => {
  const [chatInput, setChatInput] = useState("");
  const [chat, setChat] = useContext(ChatContext);
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

  const chatInputHandler = (e) => {
    setChatInput(e.target.value.substring(0, 150));
  };

  const submitChatHandler = () => {
    if (charCount > 0) {
      var newChat = [];

      if (chat.length > 0) {
        newChat = chat.slice(0);
      }

      newChat.push(
        new ChatInfo(
          chat.length + 1,
          chatInput,
          currentUser.name,
          currentUser.groupName,
          new Date()
        )
      );
      setChat(newChat);
      setChatInput("");
    }
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      submitChatHandler();
    }
  };

  useEffect(() => {
    setCharCount(chatInput.length);
  }, [chatInput]);

  return (
    <div id="chat-box">
      <link href="https://css.gg/mail-forward.css" rel="stylesheet"></link>
      <input
        value={chatInput}
        onChange={chatInputHandler}
        onKeyPress={keyPressHandler}
      ></input>
      <button onClick={submitChatHandler}>
        <i className="gg-mail-forward"></i>
      </button>
    </div>
  );
};

export default ChatBox;
