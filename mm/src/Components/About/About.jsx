import React from "react";
import "./About.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <div className="about-cards">
        <div className="about-card">
          <img src="1 (2).png" alt="High Tech Gym" />
          <h2>High Tech Gym</h2>
          <p>
            Transform your fitness regimen with premium gym equipment,
            accessories, best protein and supplements. Elevate your workouts
            with durable and versatile equipment tailored to your needs.
          </p>
        </div>
        <div className="about-card">
          <img src="2.png" alt="Qualified Instructor" />
          <h2>Qualified Instructor</h2>
          <p>
            Empower your fitness journey with our personalized guidance from our
            expert personal trainers. Tailoring workouts to your goals, they
            provide motivation, accountability, and expertise to maximize
            results.
          </p>
        </div>
        <div className="about-card">
          <img src="3.png" alt="Happy Community" />
          <h2>Happy Community</h2>
          <p>
            Join our vibrant gym community and discover the joy of fitness
            together. With a supportive atmosphere and positive energy, our
            members motivate each other to reach new heights.
          </p>
        </div>
      </div>
      <div className="about-pa">
        <p>
          Welcome to our premier gym website, meticulously crafted by Saurabh
          Singh. As a passionate fitness enthusiast, Saurabh envisioned a
          holistic fitness platform that goes beyond traditional gym offerings.
          Here, you'll find state-of-the-art equipment, premium supplements, and
          tailored personal training sessions. But more than that, we're a
          vibrant community united by our shared commitment to health and
          wellness. Join us as we inspire, motivate, and support each other on
          the path to achieving our fitness aspirations.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
