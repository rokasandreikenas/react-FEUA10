import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  margin: 10rem auto;
  padding: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const StyledField = styled.div`
  margin-bottom: 1rem;
`;

const StyledInput = styled(Field)`
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

const StyledErrorMessage = styled.div`
  color: red;
`;

const LoginFormFormik = () => {
  const handleSubmit = (values) => {
    // console.log(values);
    alert(JSON.stringify(values));
  };

  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Būtina įvesti el. paštą";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Netinkamas el. pašto formatas";
          }
          if (!values.password) errors.password = "Būtina įvesti slaptažodį";

          return errors;
        }}
      >
        <Form>
          <Heading>Login</Heading>

          <StyledField>
            <label htmlFor="email">El. paštas</label>
            <StyledInput type="email" name="email" />
            <StyledErrorMessage>
              <ErrorMessage name="email" />
            </StyledErrorMessage>
          </StyledField>

          <StyledField>
            <label htmlFor="password">Slaptažodis</label>
            <StyledInput type="password" name="password" />
            <StyledErrorMessage>
              <ErrorMessage name="password" />
            </StyledErrorMessage>
          </StyledField>

          <StyledButton>Prisijungti</StyledButton>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginFormFormik;
