import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section className="landing">
      <div className="container-xl">
        <h1 className="welcome">Welcome Angry Nerds!</h1>
        <h2>Become an angry nerd today.</h2>
        <div className="btns">
          <Link to="/register" className="btn btn-info">Sign Up</Link> 
        </div>
        <h2>Already an angry nerd? Log in.</h2>
        <div className="btns">
          <Link to="/login" className="btn btn-info">Login</Link> 
        </div>
      </div>
    </section>
  );
}
