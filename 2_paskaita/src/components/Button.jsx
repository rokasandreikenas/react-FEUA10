/* eslint-disable react/prop-types */
// props = {title: "Spausk mane"}
import "./Button.css";

const Button = (props) => {
  return (
    <button className="custom-button">
      {props.startIcon}
      {props.title}
    </button>
  );
};

export default Button;
