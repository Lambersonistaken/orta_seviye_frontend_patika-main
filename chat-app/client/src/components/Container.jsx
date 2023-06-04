// Container.jsx

import { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import style from "./style.module.css";
import { init, subscribeInitialMessages, subscribeToChat } from "../socketApi";
import { useChat } from "../context/ChatContext";
import { set } from "@project-serum/anchor/dist/cjs/utils/features";

function Container() {
  const { setMessages } = useChat();
  const [isSubscribed, setIsSubscribed] = useState(false); // Bayrak

  useEffect(() => {
    init();
    setIsSubscribed(true); // Aboneliği etkinleştir

    return () => {
      setIsSubscribed(false); // Aboneliği devre dışı bırak
    };
  }, []);

  useEffect(() => {
    // Abonelik etkinse, mesajları dinle
    if (isSubscribed) {
      subscribeInitialMessages((messages) => setMessages(messages)); // İlk mesajları al

      subscribeToChat((message) => {
        console.log(message);
        setMessages((prev) => [...prev, { message }]);
      });
    }
  }, [isSubscribed, setMessages]);

  return (
    <div className="app">
      <h1 className={style.title}>Lamberson Chat</h1>
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
