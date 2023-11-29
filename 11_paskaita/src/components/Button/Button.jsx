const Button = ({ primary, secondary, children }) => {
  const buttonBgColor = () => {
    if (primary) {
      return "blue";
    }
    if (secondary) {
      return "red";
    }
    return "grey";
  };

  return (
    <button
      style={{
        backgroundColor: buttonBgColor(),
        color: "white",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
