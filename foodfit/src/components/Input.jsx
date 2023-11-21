import PropTypes from "prop-types";
import styled from "styled-components";

const Input = (props) => {
  const { label, ...rest } = props;
  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...rest} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
