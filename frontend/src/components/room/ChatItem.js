import React, { useState, useEffect } from "react";

const ChatItem = ({ chatInfo }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    var newDate = chatInfo.date.toLocaleString("en-US").replace(",", "");
    var ending = newDate.substring(newDate.length - 3);

    newDate = newDate.substring(0, newDate.length - 6);
    newDate += ending;
    setDate(newDate);
  }, []);

  return (
    <tr>
      <td className="chat-item">
        <div className="chat-message">
          <div>{chatInfo.content}</div>
          <div className="chat-details">
            <div>
              <b>{date}</b>
            </div>
            <div>
              <b>{chatInfo.username}</b>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ChatItem;
