import React from "react";
import { Router } from "@reach/router";

import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

export const routes = [
  {
    type: "route",
    path: "/",
    label: "Home",
    component: Home
  },
  {
    type: "route",
    path: "/about",
    label: "About",
    component: About
  },
  {
    type: "route",
    path: "/profile",
    label: "Profile",
    component: Profile
  }
];

const router = () => {
  return (
    <Router>
      <Home path="/"></Home>
      <About path="/about"></About>
    </Router>
  );
};

export default router;
