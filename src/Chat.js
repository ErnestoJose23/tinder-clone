import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <div className="chat">
      <Avatar className="image" alt={name} src={profilePic} />
      <div className="details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="timestamp">{timestamp}</p>
    </div>
  );
}

export default Chat;
