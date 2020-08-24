import React from "react";
import "./App.css";
import Header from "./Header";
import Chats from "./Chats";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";
import PasswordReset from "./PasswordReset";
import UserProvider from "./providers/UserProvider";
import Application from "./Application";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Application />
      </UserProvider>
      <Router>
        <Switch>
          <Route path="/passwordReset">
            <Header backButton="/" />
            <PasswordReset />
          </Route>
          <Route path="/signin">
            <Header backButton="/" />
            <SignIn />
          </Route>
          <Route path="/signUp">
            <Header backButton="/" />
            <SignUp />
          </Route>
          <Route path="/profile">
            <Header backButton="/" />
            <ProfilePage />
          </Route>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
