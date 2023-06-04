// Container.jsx

import { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { init, subscribeToChat } from "../socketApi";
import { useChat } from "../context/ChatContext";

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
    if (isSubscribed) {
      subscribeToChat((message) => {
        console.log(message);
        setMessages((prev) => [...prev, { message }]);
      });
    }
  }, [isSubscribed, setMessages]);

  return (
    <div className="app">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
