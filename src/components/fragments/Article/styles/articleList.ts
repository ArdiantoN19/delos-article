import styled from "styled-components";
import { SIZES } from "../../../../constants";

export const StyledArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${SIZES["xl"]};

  @media screen and (min-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${SIZES["2xl"]};
  }
`;
