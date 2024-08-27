import React from "react";
import "./Hero.scss"; // Import your hero section styles here
import Nav from "./Nav"; // Ensure Nav is imported
import { UserButton, UserProfile, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
const Hero = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  return (
    <div className="hero">
      <Nav />
      <div className="hero-content">
        <div className="left-section">
          <h1>
            MUSCLE <span className="span">MALL</span>
          </h1>
          <h2>Where Fitness Dreams Become Reality</h2>
          <p>
            At MUSCLE MALL, we believe in turning fitness dreams into reality.
            Our state-of-the-art facilities, top-of-the-line equipment, and
            expert trainers provide the perfect environment for achieving your
            fitness goals.{" "}
          </p>
          {isSignedIn ? (
            <button>Start</button>
          ) : (
            <Link to={"/sign"}>
              <button>Register Now</button>
            </Link>
          )}
        </div>
        <div className="right-section">
          <img src="gym.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
