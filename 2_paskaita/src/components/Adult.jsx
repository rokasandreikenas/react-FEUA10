/* eslint-disable react/prop-types */
const Adult = (props) => {
  if (props.age >= 18) {
    return <h2>{props.name} is Adult</h2>;
  }

  return <h2>{props.name} is still a kid</h2>;
};

export default Adult;
