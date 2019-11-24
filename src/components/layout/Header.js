import React from "react";
import { Link } from "@reach/router";
import { routes } from "../../router";

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
    <header data-test-id="header-component" className="header-component">
      <div className="header-title">
        <h1>Header</h1>
      </div>
      <nav className="header-nav" data-test-id="header-nav">
        {mapLinks(routes)}
      </nav>
    </header>
  );
}

export default Header;
