import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section className="landing pb-8 container-xl">
      <div className="img-top">
        <img
          className="angrynerds"
          src="static/angrynerds.jpg"
          alt="Angry Nerds"
        />
      </div>

      <div className="sign-container ">
        <div className="sign-top">
          <h2 className="text">Angry Nerds</h2>
          <h3 className="text">The place to release your anger.</h3>
          
          <h3>Become an angry nerd today.</h3>
          <div className="btns">
            <Link to="/register" className="btn btn-info">
              Sign Up
            </Link>
        </div>
        </div>
        <h1 className="welcome">Welcome Angry Nerds!</h1>
        <h3 className="text">Learn More</h3>
        <div className="icon-container">
          <div className="icon-img1">
          <img
            className="getnoticed"
            src="static/getnoticed.png "
            alt="Get Noticed"
          />
          </div>
          <div className="icon-img2">
          <img
            className="expressyourself"
            src="static/expressyourself.png"
            alt="Express Yourself"
          />
          </div>
          <div className="icon-img3">
          <img
            className="agreewithothers"
            src="static/agreewithothers.png"
            alt="Agree With Others"
          />
          </div>
        </div>
        <div className="icon-title">
        <h3 className="noticed">GET NOTICED</h3>
        <h3 className="express">EXPRESS YOURSELF</h3>
        <h3 className="agree">DISAGREE WITH OTHERS</h3>
        </div>
      </div>
    </section>
  );
}
