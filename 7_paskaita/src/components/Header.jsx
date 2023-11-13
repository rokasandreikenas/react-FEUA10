import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          gap: 16,
          backgroundColor: "black",
          color: "white",
          padding: 32,
          fontSize: 20,
        }}
      >
        {/* <img src="" alt=""/>   */}
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </header>
  );
};

export default Header;
