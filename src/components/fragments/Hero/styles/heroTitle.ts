import styled from "styled-components";
import { SIZES } from "@/constants";

export const StyledHeroTitle = styled.h1`
  font-size: ${SIZES["3xl"]};
  font-family: Inter Bold;
  margin-block-end: ${SIZES.md};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: ${SIZES["6xl"]};
  }
`;
