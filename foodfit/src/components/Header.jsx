import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="top-header">
      <nav>
        <Link to="/">Mitybos planai</Link>
        <Link to="/cart">Krepšelis</Link>
        <Link to="/new">Naujas mitybos planas</Link>
      </nav>
    </header>
  );
};

export default Header;
