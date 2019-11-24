import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import Router from "../../router";

import "./Layout.css";

function Layout(props) {
  return (
    <>
      <Header />
      <section className="main-page-section" data-test-id="main-page-section">
        <Router />
      </section>
      <Footer />
    </>
  );
}

export default Layout;
