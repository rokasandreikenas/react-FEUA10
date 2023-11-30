import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 500px;
  margin: 10rem auto;
  padding: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const Field = styled.div`
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  display: block;
  border-radius: 5px;
  border: 1px solid #cecece;
  padding: 0.5rem;
  width: 100%;
  margin-top: 4px;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #261ff2;
  cursor: pointer;

  &:hover {
    background-color: #1e18c1;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    checkErrors();

    if (email && password) {
      alert("Prisijunget");
    }
  };

  const checkErrors = () => {
    const errorObj = {};

    if (!email) errorObj.email = "Būtina įvesti el. paštą";
    if (!password) errorObj.password = "Būtina įvesti slaptažodį";

    setError(errorObj);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Login</Heading>
      <Field>
        <label>El. paštas</label>
        <StyledInput
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
      </Field>
      <Field>
        <label>Slaptažodis</label>
        <StyledInput
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {error.password && <ErrorMessage>{error.password}</ErrorMessage>}
      </Field>
      <StyledButton>Prisijungti</StyledButton>
    </Form>
  );
};

export default LoginForm;
