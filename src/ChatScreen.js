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
    { message: "Whats upcsddog?" },
  ]);

  return (
    <div className="chatscreen">
      <p className="timestamp">YOU MATCHED WITH HOLA ON 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="message">
            <Avatar className="image" alt={message.name} src={message.image} />
            <p className="text">{message.message}</p>
          </div>
        ) : (
          <div className="message">
            <p className="textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="input">
        <input className="field" type="text" placeholder="Type a message" />
        <button className="button"> SEND </button>
      </form>
    </div>
  );
}

export default ChatScreen;
