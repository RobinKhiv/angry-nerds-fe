import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section class="landing">
      <div className="container-xl">
        <h1 class="welcome">Welcome Angry Nerds!</h1>
        <h3 class="text">Express Yourself.  Agree With Others.  Get Noticed.</h3>
        <h2>Become an angry nerd today.</h2>
        <div class="btns">
          <Link to="/register" className="btn btn-info">Sign Up</Link> 
        </div>
        <h2>Already an angry nerd? Log in.</h2>
        <div class="btns">
          <Link to="/login" className="btn btn-info">Login</Link> 
        </div>
      </div>
    </section>
  );
}
