import React from "react";
import "./Feature.scss";
import { Link } from "react-router-dom";

const Feature = () => {
  const show = () => {
    alert(
      "Dear user, We apologize for the inconvenience. Our backend is currently undergoing maintenance, preventing us from proceeding to the next page. Once this issue is resolved, you will receive an email notification at your registered address. Thank you for your patience and understanding."
    );
  };

  return (
    <div className="feature">
      <div className="row">
        <div className="card red">
          <Link style={{ textDecoration: "none" }} to={"/products"}>
            <img src="supli.png" alt="Suppliments" />
            <h1>Suppliments</h1>
            <h4>Discover Wellness, Rediscover You.</h4>
          </Link>
        </div>
        <div className="card green">
          <img src="trainer.png" alt="Personal Trainer" />
          <h1>Personal Trainer</h1>
          <h4>Train Hard, Train Smart, See Results.</h4>
        </div>
      </div>
      <div className="row">
        <div className="card green">
          <img src="eqip.png" alt="Gym Accessories" />
          <h1>Gym Accessories</h1>
          <h4>Enhance Your Workout, Elevate Your Performance</h4>
        </div>
        <div className="card red">
          <img src="community.png" alt="Community Forum" />
          <h1>Community Forum</h1>
          <h4>Beyond the Gym: Engage in Our Virtual Fitness Hub</h4>
        </div>
      </div>
    </div>
  );
};

export default Feature;
