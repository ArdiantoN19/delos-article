import React, { AnchorHTMLAttributes } from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../../constants";
import { ArrowDown } from "@phosphor-icons/react";

const StyledCTA = styled.a`
  text-decoration: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.gray};
  color: ${COLORS.darkGray};
  margin-block-start: ${SIZES["3xl"]};
  transition: all 0.25s ease-in-out;
  animation: bounce 1.5s infinite;

  &:hover {
    background-color: ${COLORS.secondary};
    animation-play-state: paused;
  }

  @media screen and (min-width: 768px) {
    margin-block-start: ${SIZES["6xl"]};
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }
`;

interface ICTA extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Cta: React.FC<ICTA> = ({ ...props }) => {
  return (
    <StyledCTA {...props}>
      <ArrowDown size={20} />
    </StyledCTA>
  );
};

export default Cta;
