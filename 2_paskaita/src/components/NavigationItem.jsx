/* eslint-disable react/prop-types */

const NavigationItem = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {props.startIcon}
      {props.title}
    </a>
  );
};

export default NavigationItem;
