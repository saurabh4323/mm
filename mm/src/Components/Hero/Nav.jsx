import React from "react";
import "./Nav.css"; // Import your navbar styles here
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="imge">
        <img src="logoo.png" alt="Logo"></img>
      </div>
      <div className="nav-links">
        <Link to="/" onClick={() => handleScroll("hero")}>
          Home
        </Link>
        <Link to="/" onClick={() => handleScroll("feature")}>
          Feature
        </Link>
        <Link to="/" onClick={() => handleScroll("about")}>
          About
        </Link>
        {isSignedIn ? (
          <UserButton></UserButton>
        ) : (
          <Link to="/sign">Profile</Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
