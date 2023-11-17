import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Registration was successfull");
    navigate("/todos");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>Register</button>
    </form>
  );
};

export default Register;
