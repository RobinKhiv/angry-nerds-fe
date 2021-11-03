import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section className="landing">
      <img className="angrynerds" src="static/angrynerds.jpg" alt="Angry Nerds"/>
      <div className="container-x1">
        <h3 class="text">Angry Nerds</h3>
        <h3 class="text">The place to release your anger.</h3>

        <div className="btns"> 
        <Link to="/register" className="btn btn-info">Sign Up</Link> 
        </div>
        <h1 class="welcome">Welcome Angry Nerds!</h1>
        <h3 className="text">Learn More</h3>

        <img className="getnoticed" src="static/getnoticed.png "alt="Get Noticed"/>
        <img className="expressyourself" src="static/expressyourself.png" alt="Express Yourself"/>
        <img className="agreewithothers" src="static/agreewithothers.png" alt="Agree With Others"/>

        <h3 className="noticed">GET NOTICED</h3>
        <h3 className="express">EXPRESS YOURSELF</h3>
        <h3 className="agree">AGREE WITH OTHERS</h3>

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
