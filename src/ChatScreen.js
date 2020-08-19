import React, { useState } from "react";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "hola",
      image:
        "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
      message: "Whats updog?",
    },
    {
      name: "hola",
      image:
        "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
      message: "Whats updog?",
    },
    { name: "hola", image: "...", message: "Whats updog?" },
  ]);

  return (
    <div className="chatscreen">
      <p>YOU MATCHED WITH HOLA ON 10/08/20</p>
    </div>
  );
}

export default ChatScreen;
