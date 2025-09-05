import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcomescreen from "../components/WelcomeScreen";
import Login from "../components/Login";
import SignupForm from "../components/Signupform";
import AccountSettings from "../components/AccountSetting";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcomescreen />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<SignupForm />} />
      <Route path="/AccountSetting" element={<AccountSettings />} />
    </Routes>
  );
};

export default Mainroutes;
