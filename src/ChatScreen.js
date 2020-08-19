import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "hola",
      image:
        "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
      message: "Whats updodddg?",
    },
    {
      name: "hola",
      image:
        "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
      message: "Whats qweupdog?",
    },
    { name: "hola", image: "...", message: "Whats upcsddog?" },
  ]);

  return (
    <div className="chatscreen">
      <p>YOU MATCHED WITH HOLA ON 10/08/20</p>
      {messages.map((message) => (
        <div className="message">
          <Avatar className="image" alt={message.name} src={message.image} />
          <p className="text">{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatScreen;
