import styled from "styled-components";
import { COLORS, SHADOWS, SIZES } from "../../../../constants";
import Link from "../../../ui/Link";

export const StyledImage = styled.img`
  width: 230px;
  height: 140px;
  object-fit: cover;
  border-radius: 0.5rem;
  background-color: ${COLORS.gray};

  box-shadow: ${SHADOWS.sm};
  display: block;

  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 200px;
    box-shadow: ${SHADOWS.md};
    border-radius: ${SIZES.xs};
  }

  @media screen and (min-width: 1023px and max-width: 1200px) {
    width: 230px;
    height: 140px;
    border-radius: 0.5rem;
  }
`;

export const StyledArticleBody = styled.div`
  width: 100%;
`;

export const StyledArticleTitle = styled(Link)`
  font-size: ${SIZES.md};
  font-family: Inter Semibold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 0;
  margin-block-end: ${SIZES.xs};

  @media screen and (min-width: 1200px) {
    margin-block-end: ${SIZES.md};
    font-size: ${SIZES.xl};
  }

  @media screen and (min-width: 1023px and max-width: 1200px) {
    margin-block-end: ${SIZES.xs};
    font-size: ${SIZES.md};
  }
`;

export const StyledArticleTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES.xs};
  margin-bottom: 10px;

  & > .article-type {
    font-size: 0.5rem;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: ${SIZES.sm};

    & > .article-type {
      font-size: ${SIZES.xs};
    }
  }

  @media screen and (min-width: 1023px and max-width: 1200px) {
    margin-bottom: 10px;
    & > .article-type {
      font-size: 0.5rem;
    }
  }
`;

export const StyledArticleCoins = styled.h3`
  font-size: ${SIZES.lg};
  font-family: Inter Bold;
  color: ${COLORS.orange};
  margin-bottom: ${SIZES.xs};

  @media screen and (min-width: 1200px) {
    margin-bottom: ${SIZES["xl"]};
    font-size: ${SIZES["2xl"]};
  }
`;

export const StyledArticleFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledArticleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  & > .info-author,
  & > .info-published {
    font-size: 0.5rem;
  }

  & > .info-published {
    color: ${COLORS.gray};
  }

  @media screen and (min-width: 1200px) {
    & > .info-author,
    & > .info-published {
      font-size: ${SIZES.xs};
    }
  }

  @media screen and (min-width: 1023px and max-width: 1200px) {
    & > .info-author,
    & > .info-published {
      font-size: 0.5rem;
    }
  }
`;
