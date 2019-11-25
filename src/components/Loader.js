import React from "react";
import PropTypes from "prop-types";

import "./Loader.css";

const Loader = props => {
  const { message } = props;
  return (
    <section className="page-loader" data-test-id="page-loader">
      <div className="page-loader-message">{message}</div>
    </section>
  );
};

Loader.propTypes = {
  message: "Loading"
};

export default Loader;
