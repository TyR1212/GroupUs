import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";

const Chat = () => {
  const [charCount, setCharCount] = useState(0);

  return (
    <div id="chat-container">
      <div className="social-sub-label">Chat</div>
      <div id="chat-table-container">
        <ChatList />
      </div>
      <ChatBox charCount={charCount} setCharCount={setCharCount} />
      <div id="chat-char-counter">{charCount}/150</div>
    </div>
  );
};

export default Chat;
