import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "@/constants";

const StyledBadge = styled.div`
  background-color: ${COLORS.orange};
  color: ${COLORS.primary};
  padding: 6px ${SIZES.xs};
  border-radius: ${SIZES.xs};
  font-size: 0.5rem;
  display: inline-block;

  @media screen and (min-width: 1200px) {
    font-size: ${SIZES.xs};
  }
  @media screen and (min-width: 1023px and max-width: 1200px) {
    font-size: 0.5rem;
  }
`;

interface IBadge extends HTMLAttributes<HTMLDivElement> {}

const Badge: React.FC<IBadge> = ({ children, ...props }) => {
  return <StyledBadge {...props}>{children}</StyledBadge>;
};

export default Badge;
