import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from "./Button";
import { PATHS } from "../routes/consts";
import styles from "./Topbar.module.scss";

const Topbar = () => {
  const { user, isLoggedIn, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRedirectToLogin = () => {
    navigate(PATHS.Login);
  };

  return (
    <header className={styles.topbar}>
      <nav>
        <h2>LOGO</h2>
        <div>
          <Link to={PATHS.Home}>Home</Link>
          {isLoggedIn && (
            <>
              <Link to={PATHS.Settings}>Settings</Link>
            </>
          )}
        </div>
        <div>
          {user ? (
            <>
              <strong className={styles.email}>{user.email}</strong>{" "}
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Button onClick={handleRedirectToLogin}>Login</Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
