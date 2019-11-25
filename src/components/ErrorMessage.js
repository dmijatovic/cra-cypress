import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = props => {
  const { title, message } = props;
  return (
    <section className="error-message" data-test-id="error-message">
      <h1 className="error-title" data-test-id="error-title">
        {title}
      </h1>
      <div className="error-message">{message}</div>
    </section>
  );
};

ErrorMessage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

export default ErrorMessage;
