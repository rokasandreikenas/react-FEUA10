import PropTypes from "prop-types";
import styles from "./FormField.module.scss";

const Input = ({ label, ...props }) => {
  return (
    <div className={styles.formField}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input {...props} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
