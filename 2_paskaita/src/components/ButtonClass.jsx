/* eslint-disable react/prop-types */
// props = {title: "Spausk mane"}
import React from "react";
import "./Button.css";

class ButtonClass extends React.Component {
  render() {
    return <button className="custom-button">{this.props.title}</button>;
  }
}

export default ButtonClass;
