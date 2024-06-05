import React from "react";
import { Circle } from "@phosphor-icons/react";
import styled from "styled-components";

const StyledLoader = styled.div`
  animation: ping 1s linear infinite;

  @keyframes ping {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Loader: React.FC<{ size?: number }> = ({ size = 20 }) => {
  return (
    <StyledLoader title="loader">
      <Circle size={size} />
    </StyledLoader>
  );
};

export default Loader;
