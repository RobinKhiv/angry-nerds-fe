import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div class="landing">
      <h1 class="welcome">Welcome Angry Nerds!</h1>
      <h2>Become an angry nerd today.</h2>
      <div class="btns">
        <button type="button" class="btn btn-info" value="signup">Sign up</button>
      </div>
      <h2>Already an angry nerd? Log in.</h2>
      <div class="btns">
        <button type="button" class="btn btn-info" value="login">Log in</button>
      </div>
    </div>
  );
}
