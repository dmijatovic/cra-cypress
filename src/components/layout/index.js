import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import Router from "../../router";

import "./Layout.css";

function Layout(props) {
  return (
    <>
      <Header />
      <section className="main" data-test-id="main-page-section">
        This is my body
        <Router />
      </section>
      <Footer />
    </>
  );
}

export default Layout;
