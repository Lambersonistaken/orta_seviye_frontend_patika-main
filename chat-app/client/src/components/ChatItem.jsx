import React from "react";
import styles from "./style.module.css";

function ChatItem({ item }) {
  return (
    <div className={`${styles.chatItem} ${styles.chatItem.right}`}>
      <div>{item.message}</div>
    </div>
  );
}

export default ChatItem;
