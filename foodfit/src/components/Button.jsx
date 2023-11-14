import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
