import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginFormFormik from "./components/LoginFormFormik";
import RegisterFormFormik from "./components/RegisterFormFormik";
import styled from "styled-components";

const Navigation = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const App = () => {
  return (
    <>
      <Navigation>
        <Link to="/">Login form</Link>
        <Link to="/login-formik">Login form with Formik</Link>
        <Link to="/register-formik">Register form with Formik</Link>
      </Navigation>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login-formik" element={<LoginFormFormik />} />
        <Route path="/register-formik" element={<RegisterFormFormik />} />
      </Routes>
    </>
  );
};

export default App;
