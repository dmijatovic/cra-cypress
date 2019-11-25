import React from "react";
import { Router } from "@reach/router";

import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Notes from "../pages/Notes";
import Page404 from "../pages/Page404";

export const links = [
  {
    type: "route",
    path: "/",
    label: "Home"
  },
  {
    type: "route",
    path: "/about",
    label: "About"
  },
  {
    type: "route",
    path: "/profile/1234",
    label: "Profile"
  },
  {
    type: "route",
    path: "/notes",
    label: "Notes"
  }
];

const components = [
  <Home key="/" path="/" />,
  <About key="/about" path="/about" />,
  <Profile key="/profile" path="/profile/:id" />,
  <Notes key="/notes" path="/notes" />,
  <Page404 key="/404" path="*" />
];

const router = () => {
  return <Router>{components.map(item => item)}</Router>;
};

export default router;
