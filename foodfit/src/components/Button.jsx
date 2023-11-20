import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/ThemeContext";
import "./Button.scss";

const Button = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{ backgroundColor: theme.background, color: theme.foreground }}
      className="button"
      {...props}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
