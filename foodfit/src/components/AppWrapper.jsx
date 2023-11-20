import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/ThemeContext";

const AppWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ minHeight: "100vh", backgroundColor: theme.foreground }}>
      {children}
    </div>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
