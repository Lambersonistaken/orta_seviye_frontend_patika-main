// ChatList.jsx

import React from "react";
import styles from "./style.module.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const { messages, setMessages } = useChat();

  const handleClearMessages = () => {
    setMessages([]); // Mesajları temizle
  };

  return (
    <div className={styles.chatlist}>
      <ScrollableFeed>
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </ScrollableFeed>
      <button className={styles.butt} onClick={handleClearMessages}>
        Temizle
      </button>{" "}
    </div>
  );
}

export default ChatList;
