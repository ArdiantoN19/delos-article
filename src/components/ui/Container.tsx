import styled from "styled-components";
import { CONTAINER } from "../../constants";
import React, { HTMLAttributes } from "react";

const StyledContainer = styled.div`
  padding: ${CONTAINER.sm};

  @media screen and (min-width: 768px) {
    padding: ${CONTAINER.md};
  }

  @media screen and (min-width: 1024px) {
    padding: ${CONTAINER.lg};
  }

  @media screen and (min-width: 1200px) {
    padding: ${CONTAINER.xl};
  }
`;

interface IContainer extends HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<IContainer> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
