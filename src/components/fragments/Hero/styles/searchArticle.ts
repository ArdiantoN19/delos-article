import styled from "styled-components";
import { COLORS, SIZES } from "../../../../constants";

export const StyledSearchArticle = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;

  & > .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${SIZES.xs};
    background-color: ${COLORS.primary};
    width: 30px;
  }
`;
