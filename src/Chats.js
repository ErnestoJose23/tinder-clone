import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Hola"
        message="Whats updog?"
        timestamp="40 seconds ago"
        profilePic="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"
      />
      <Chat
        name="Hehe"
        message="Whats updog?"
        timestamp="40 seconds ago"
        profilePic="https://cxl.com/wp-content/uploads/2014/10/stock-photo-female-customer-support-operator-with-headset-and-smiling-149580755.jpg"
      />
      <Chat
        name="Brrr"
        message="Whats updog?"
        timestamp="40 seconds ago"
        profilePic="https://st.depositphotos.com/2069323/2156/i/950/depositphotos_21568973-stock-photo-woman-eating-salad-showing-copy.jpg"
      />
      <Chat
        name="Marssdd"
        message="Whats updog?"
        timestamp="40 seconds ago"
        profilePic="https://image.shutterstock.com/image-photo/portrait-young-beautiful-cute-cheerful-260nw-666258808.jpg"
      />
    </div>
  );
}

export default Chats;
