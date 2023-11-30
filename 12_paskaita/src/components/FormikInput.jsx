import { Field, ErrorMessage } from "formik";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled(Field)`
  display: block;
  border-radius: 5px;
  border: 1px solid #cecece;
  padding: 0.5rem;
  width: 100%;
  margin-top: 4px;
`;

const StyledErrorMessage = styled.div`
  color: red;
`;

const FormikInput = ({ label, name, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <StyledInput name={name} {...props} />
      <StyledErrorMessage>
        <ErrorMessage name={name} />
      </StyledErrorMessage>
    </div>
  );
};

FormikInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FormikInput;
