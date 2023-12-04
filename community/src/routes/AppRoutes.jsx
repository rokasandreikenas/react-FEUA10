import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { PATHS } from "./consts";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AppRoutes = () => {
  const { isLoggedIn } = useContext(UserContext);
  // tikrinam ar yra prisijungęs ir atitinkamai rodom skirtingus Route

  return (
    <Routes>
      <Route path={PATHS.Login} element={isLoggedIn ? <Home /> : <Login />} />
      <Route path={PATHS.Register} element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
