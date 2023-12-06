import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { PATHS } from "./consts";
import Topbar from "../components/Topbar";

const AppRoutes = () => {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path={PATHS.Home} element={<Home />} />
        <Route path={PATHS.Login} element={<Login />} />
        <Route path={PATHS.Register} element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
