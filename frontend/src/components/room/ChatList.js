import React, { useState, useContext, useEffect, useRef } from "react";
import ChatItem from "./ChatItem";
import { ChatContext } from "./../ChatContext";
import ChatInfo from "./../ChatInfo";
//TODO: set chat display limit, and activity limit
const ChatList = () => {
  const [chat, setChat] = useContext(ChatContext);
  const bottomOfChat = useRef(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  const delay = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };

  const scrollToBottom = async () => {
    await delay(10);
    bottomOfChat.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  useEffect(() => {
    if (autoScrollEnabled) {
      scrollToBottom();
    }
  }, [chat]);

  return (
    <table id="chat-table">
      {chat.map((a) => (
        <ChatItem key={a.chatId} chatInfo={a} />
      ))}
      <div ref={bottomOfChat}></div>
    </table>
  );
};

export default ChatList;
