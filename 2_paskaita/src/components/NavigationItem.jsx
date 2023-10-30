/* eslint-disable react/prop-types */

const NavigationItem = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.title}
    </a>
  );
};

export default NavigationItem;
