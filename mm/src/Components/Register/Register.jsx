import React from "react";
import "./Register.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useState } from "react";

import { SignIn } from "@clerk/clerk-react";
import Nav from "../Hero/Nav";

const Register = () => {
  return (
    <>
      <Nav></Nav>
      <div className="ce">
        <div className="si">
          <SignIn></SignIn>
        </div>
      </div>
    </>
  );
};

export default Register;
