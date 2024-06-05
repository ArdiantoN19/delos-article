import styled from "styled-components";
import { SIZES } from "@/constants";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  margin: auto;
  gap: ${SIZES.xl};
  margin-block-end: ${SIZES["5xl"]};

  @media screen and (min-width: 768px) {
    margin-block-start: ${SIZES["4xl"]};
  }
`;
