import { useState } from "react";
import style from "./style.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState("");
  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessages((prev) => [...prev, { message, fromMe: true }]);
    sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Press enter to send message"
          type="text"
          className={style.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <img className={style.sendIco} src="/send.png" alt="Send" />{" "}
      {/* Send ikonu */}
    </div>
  );
}

export default ChatForm;
