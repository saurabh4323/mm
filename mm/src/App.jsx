import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Hero from "./Components/Hero/Hero";
import Landing from "./Landing";
function App() {
  return (
    <>
      <div className="main">
        <Landing></Landing>
      </div>
    </>
  );
}

export default App;
