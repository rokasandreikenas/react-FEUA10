import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node, // string, number ar betkoks elementas
  onClick: PropTypes.func, // funkcija
};

export default Button;
