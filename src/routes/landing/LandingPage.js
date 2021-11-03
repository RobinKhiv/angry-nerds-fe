import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section className="landing">
      <div class="img-top">
        <img
          className="angrynerds"
          src="static/angrynerds.jpg"
          alt="Angry Nerds"
        />
      </div>

      <div className="container-x1">
        <div class="sign-top">
        <h2 class="text">Angry Nerds</h2>
        <h3 class="text">The place to release your anger.</h3>
        
        <h3>Become an angry nerd today.</h3>
        <div className="btns">
          <Link to="/register" className="btn btn-info">
            Sign Up
          </Link>
        </div>

        <h3>Already an angry nerd? Log in.</h3>
        <div className="btns">
          <Link to="/login" className="btn btn-info">
            Login
          </Link>
        </div>
        </div>
        <h1 class="welcome">Welcome Angry Nerds!</h1>
        <h3 className="text">Learn More</h3>
        <div class="icon-container">
          <div class="icon-img1">
          <img
            className="getnoticed"
            src="static/getnoticed.png "
            alt="Get Noticed"
          />
          </div>
          <div class="icon-img2">
          <img
            className="expressyourself"
            src="static/expressyourself.png"
            alt="Express Yourself"
          />
          </div>
          <div class="icon-img3">
          <img
            className="agreewithothers"
            src="static/agreewithothers.png"
            alt="Agree With Others"
          />
          </div>
        </div>
        <div class="icon-title">
        <h3 className="noticed">GET NOTICED</h3>
        <h3 className="express">EXPRESS YOURSELF</h3>
        <h3 className="agree">DISAGREE WITH OTHERS</h3>
        </div>
      </div>
    </section>
  );
}
