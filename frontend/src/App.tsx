import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Onboarding from "./pages/Onboarding";
//import Login from "./auth/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Signup} />
        <Route path="/login" Component={Login} />
        <Route path="/onboarding" Component={Onboarding} />
      </Routes>
    </div>
  );
}

export default App;
