import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section className="landing pb-8 container">
      <div className="landing-header row">
        <div className="img-top">
          <img
            className="angrynerds"
            src="static/angrynerds.jpg"
            alt="Angry Nerds"
            />
        </div>
        <div className="sign-container">
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
        </div>
      </div>
      <div className="row">
        <h1 className="welcome mb-4">Welcome Angry Nerds!</h1>
        <h3 className="text mb-4">Learn More</h3>
        <div className="icon-container row">
          <div className="icon-img1 col-3">
          <img className="getnoticed" src="static/getnoticed.png " alt="Get Noticed" />
          </div>
          <div className="icon-img2 col-3">
          <img
            className="expressyourself"
            src="static/expressyourself.png"
            alt="Express Yourself"
            />
          </div>
          <div className="icon-img3 col-3">
            <img
              className="agreewithothers"
              src="static/agreewithothers.png"
              alt="Agree With Others"
              />
          </div>  
      </div>
        <div className="icon-title row justify-content-between mt-4">
          <div className="col-3">
            <p className="h2 text-center">GET NOTICED</p>
          </div>
          <div className="col-3">
            <p className="h2 text-center">EXPRESS YOURSELF</p>
          </div>
          <div className="col-3">
            <p className="h2 text-center">DISAGREE WITH OTHERS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
