import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../../constants";

type TButtonType = ButtonHTMLAttributes<HTMLButtonElement>["type"];

const StyledButton = styled.button.attrs<{
  $type?: TButtonType;
}>((props) => ({
  type: props.$type || "button",
}))`
  padding: 0.5rem 1rem;
  font-size: ${SIZES.sm};
  border-radius: ${SIZES.xs};
  border: 1px solid #ccc;
  outline: none;
  background: transparent;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  min-width: 70px;

  &:hover,
  &.active {
    background-color: ${COLORS.secondary};
  }
`;

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButton> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
