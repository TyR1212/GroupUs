class ChatInfo {
    constructor(
      chatId = 0,
      content = "",
      username = "",
      groupName = "",
      date = new Date(),
    ) {
      this.chatId = chatId;
      this.content = content;
      this.username = username;
      this.groupName = groupName;
      this.date = date;
    }
  }
  
  export default ChatInfo;
  