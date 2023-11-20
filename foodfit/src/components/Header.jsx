import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

import "./Header.scss";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="top-header">
      <nav>
        <div className="links">
          <Link to="/">Mitybos planai</Link>
          <Link to="/cart">Krepšelis</Link>
          <Link to="/new">Naujas mitybos planas</Link>
        </div>
        <Button onClick={toggleTheme}>
          {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
