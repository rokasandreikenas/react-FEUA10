import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from "./Button";
import styles from "./Topbar.module.scss";
import { PATHS } from "../routes/consts";

const Topbar = () => {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <header className={styles.topbar}>
      <nav>
        <h2>LOGO</h2>
        <div>
          <Link to={PATHS.Home}>Home</Link>
          <Link to={PATHS.Settings}>Settings</Link>
        </div>
        <div>
          <strong className={styles.email}>{user.email}</strong>{" "}
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
