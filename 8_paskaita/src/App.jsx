import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import User from "./pages/User";

const App = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/users">User list</Link>
        <Link to="/todos">Todo list</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </>
  );
};

export default App;
