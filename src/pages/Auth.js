import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Auth = ({ children }) => {
  if (localStorage.getItem("token")) {
    console.log(children)
    return children;
  }
  return <Navigate to="/" />;
};

export default Auth;
