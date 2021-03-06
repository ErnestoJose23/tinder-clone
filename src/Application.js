import React from "react";
import { Router } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
function Application() {
  const user = null;
  return user ? (
    <ProfilePage />
  ) : (
    <div>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
    </div>
  );
}
export default Application;
