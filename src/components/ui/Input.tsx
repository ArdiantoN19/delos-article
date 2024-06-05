import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { COLORS, SHADOWS, SIZES } from "@/constants";

const StyledInput = styled.input.attrs<{ $type?: HTMLInputTypeAttribute }>(
  (props) => ({
    type: props.$type || "text",
  })
)`
  font-size: ${SIZES.md};
  outline: none;
  border: 1px solid ${COLORS.gray};
  display: inline-block;
  width: 100%;
  padding: ${SIZES.sm} ${SIZES.md};
  border-radius: ${SIZES.xs};
  transition: all 0.25s ease-in-out;

  &:focus {
    border: 1px solid ${COLORS.darkGray};
    box-shadow: ${SHADOWS.md};
  }
`;

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInput> = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
