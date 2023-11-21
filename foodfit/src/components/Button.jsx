import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};

  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #5019ae;
    cursor: pointer;
  }
`;

const Button = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledButton
      $backgroundColor={theme.background}
      $color={theme.foreground}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
