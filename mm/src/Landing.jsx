import React, { useRef } from "react";
import Hero from "./Components/Hero/Hero";
import Feature from "./Components/Feature/Feature";
import AboutPage from "./Components/About/About";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <div id="hero">
        <Hero></Hero>
      </div>
      <div id="feature">
        <Feature></Feature>
      </div>
      <div id="about">
        <AboutPage></AboutPage>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Landing;
