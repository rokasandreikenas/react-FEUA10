/* eslint-disable react/prop-types */
const Greeting = (props) => {
  return (
    <div>
      {/* If else */}
      Hello, {props.name ? props.name : "user"}!
      {props.lastLoggedIn && <p>Your last login was at {props.lastLoggedIn}</p>}{" "}
      {/* If true */}
    </div>
  );
};

export default Greeting;
