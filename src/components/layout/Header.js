import React from "react";
import { Link } from "@reach/router";
import { routes } from "../../router";

import "./Header.css";

function Header(props) {
  const mapLinks = routes => {
    let Links = [];
    routes.forEach(item => {
      if (item.type === "route") {
        Links.push(
          <Link
            key={item.path}
            to={item.path}
            className="header-nav-link"
            data-test-id="header-nav-link"
          >
            {item.label}
          </Link>
        );
      }
    });
    return Links;
  };
  console.log("routes...", routes);
  return (
    <header data-test-id="header-component">
      <h1>Header</h1>
      <nav className="header-nav" data-test-id="header-nav">
        {mapLinks(routes)}
      </nav>
    </header>
  );
}

export default Header;
