import React from "react";
import PropTypes from "prop-types";

import "./Paragraph.css";

const Paragraph = props => {
  const { title, content } = props;
  return (
    <div className="paragraph">
      <h2 className="paragraph-title">{title}</h2>
      <p className="paragraph-content">{content}</p>
    </div>
  );
};

Paragraph.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default Paragraph;
