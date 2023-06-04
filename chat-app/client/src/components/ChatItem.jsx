import React from "react";
import styles from "./style.module.css";

function ChatItem({ item }) {
  return (
    <div
      className={`${styles.chatItem} ${item.fromMe ? styles.right : ""} ${
        item.fromMe ? styles.sender : ""
      }`}
    >
      <div>{item.message}</div>
    </div>
  );
}

export default ChatItem;
