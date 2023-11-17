import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      If you want to start using our software click{" "}
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
};

export default Home;
