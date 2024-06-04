import styled from "styled-components";
import { SIZES } from "../../../../constants";

export const StyledArticle = styled.div`
  margin-bottom: ${SIZES["3xl"]};
`;

export const StyledArticleTitle = styled.h2`
  font-family: Inter Semibold;
  font-size: ${SIZES["3xl"]};
  margin-bottom: ${SIZES["xl"]};
  padding-top: ${SIZES["3xl"]};

  @media screen and (min-width: 768px) {
    font-size: ${SIZES["3xl"]};
  }
`;
