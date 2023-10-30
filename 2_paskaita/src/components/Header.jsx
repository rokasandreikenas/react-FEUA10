import NavigationItem from "./NavigationItem";
import Button from "./Button";
import {
  FaCog,
  FaQuestionCircle,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <div className="left">
          <a href="/" className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/lt/c/c0/LP_logo_colour.png"
              alt="Logo"
            />
          </a>
          <NavigationItem
            title="Privatiems"
            href="https://post.lt/lt/siuntimas-Lietuvoje"
          />
          <NavigationItem
            title="Verslui"
            href="https://post.lt/lt/kaip-tapti-verslo-klientu"
          />
        </div>
        <div className="right">
          <NavigationItem
            title="Įrankiai"
            href="https://post.lt/lt/siuntimas-Lietuvoje"
            startIcon={<FaCog fontSize={24} />}
          />
          <NavigationItem
            title="Pagalba"
            href="https://post.lt/lt/siuntimas-Lietuvoje"
            startIcon={<FaQuestionCircle fontSize={24} />}
          />
          <NavigationItem
            title="Paieška"
            href="https://post.lt/lt/siuntimas-Lietuvoje"
            startIcon={<FaSearch fontSize={24} />}
          />
          <Button
            title="Siųsti siuntą"
            startIcon={<FaUserCircle fontSize={20} />}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
