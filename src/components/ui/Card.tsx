import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { SIZES } from "../../constants";

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  gap: ${SIZES.md};

  @media screen and (min-width: 768px) {
    gap: ${SIZES["2xl"]};
  }
`;

interface ICard extends HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<ICard> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
