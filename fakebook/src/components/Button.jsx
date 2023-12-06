import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
