import styled from "styled-components";
import Container from "../../../ui/Container";
import { COLORS, SHADOWS, SIZES } from "../../../../constants";
import Badge from "../../../ui/Badge";

export const StyledDetailArticle = styled(Container)`
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-block-end: ${SIZES["3xl"]};

  @media screen and (min-width: 768px) {
    max-width: 900px;
  }
`;

export const StyledDetailArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.sm};
  align-items: center;
  justify-content: center;
  margin-block-end: ${SIZES["3xl"]};

  @media screen and (min-width: 768px) {
    gap: ${SIZES.xl};
  }
`;

export const StyledDetailArticleHeaderType = styled(Badge)`
  font-size: ${SIZES.xs};
`;
export const StyledDetailArticleHeaderTitle = styled.h1`
  font-size: ${SIZES["3xl"]};
  font-family: Inter Bold;
  text-transform: capitalize;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: ${SIZES["5xl"]};
  }
`;

export const StyledDetailArticleHeaderImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: ${SIZES.xs};
  box-shadow: ${SHADOWS.sm};
  background-color: ${COLORS.gray};
`;

export const StyledDetailArticleBody = styled(StyledDetailArticleHeader)`
  align-items: start;
  justify-content: start;
`;

export const StyledDetailArticleBodyInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledDetailArticleBodyInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > .wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-right: 1px solid ${COLORS.darkGray};
    padding-right: 10px;

    & > .info-published {
      font-size: ${SIZES.xs};
      color: ${COLORS.gray};
    }
  }

  & > .coins {
    color: ${COLORS.orange};
  }
`;

export const StyledDetailArticleBodyDescription = styled.p`
  font-size: ${SIZES.sm};
  text-align: justify;
`;
