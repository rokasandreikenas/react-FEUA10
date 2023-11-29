import React from "react";
import PropTypes from "prop-types";
import "./AIButton.css"; // Ensure the CSS file name is also updated

const AIButton = ({ label, onClick, style, className, ...props }) => {
  return (
    <button
      className={`ai-button ${className}`}
      onClick={onClick}
      style={style}
      {...props}
    >
      {label}
    </button>
  );
};

AIButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

AIButton.defaultProps = {
  onClick: () => {},
  style: {},
  className: "",
};

export default AIButton;
