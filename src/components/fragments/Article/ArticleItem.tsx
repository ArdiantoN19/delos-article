import React, { useMemo } from "react";
import styled from "styled-components";
import Card from "../../ui/Card";
import { COLORS, SHADOWS, SIZES } from "../../../constants";
import Link from "../../ui/Link";
import { TArticle } from "../../../types/article";
import { dayFormatter, generateCoins } from "../../../utils";

const StyledImage = styled.img`
  width: 230px;
  height: 140px;
  object-fit: cover;
  border-radius: 0.5rem;

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

const StyledArticleBody = styled.div`
  width: 100%;
`;

const StyledArticleTitle = styled(Link)`
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

const StyledArticleTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES.xs};
  margin-bottom: 10px;

  & > .article-type,
  & > .article-category {
    font-size: 0.5rem;
  }

  & > .article-category {
    background-color: ${COLORS.orange};
    color: ${COLORS.primary};
    padding: 6px ${SIZES.xs};
    border-radius: ${SIZES.xs};
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: ${SIZES.sm};

    & > .article-type,
    & > .article-category {
      font-size: ${SIZES.xs};
    }
  }

  @media screen and (min-width: 1023px and max-width: 1200px) {
    margin-bottom: 10px;
    & > .article-type,
    & > .article-category {
      font-size: 0.5rem;
    }
  }
`;

const StyledArticleCoins = styled.h3`
  font-size: ${SIZES.lg};
  font-family: Inter Bold;
  color: ${COLORS.orange};
  margin-bottom: ${SIZES.xs};

  @media screen and (min-width: 1200px) {
    margin-bottom: ${SIZES["xl"]};
    font-size: ${SIZES["2xl"]};
  }
`;

const StyledArticleFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledArticleInfo = styled.div`
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

interface IArticleItem extends TArticle {
  image: string;
}

const ArticleItem: React.FC<IArticleItem> = ({
  id,
  title,
  image,
  published_date,
  byline,
  type,
  section,
}) => {
  const coins = useMemo(
    () => generateCoins(dayFormatter(published_date)),
    [published_date]
  );
  return (
    <Card>
      <StyledImage src={image} alt={title} />
      <StyledArticleBody>
        <StyledArticleTypeWrapper>
          <h5 className="article-type">{type}</h5> |
          <div className="article-category">{section}</div>
        </StyledArticleTypeWrapper>
        <StyledArticleTitle to={`/details/${id}`}>{title}</StyledArticleTitle>
        <StyledArticleCoins>
          {coins === 0 ? "Free" : `${coins} Coins`}
        </StyledArticleCoins>
        <StyledArticleFooter>
          <StyledArticleInfo>
            <h6 className="info-author">
              by {byline?.split(",")[0].replace("By", "")}
            </h6>
            <p className="info-published">⁕</p>
            <p className="info-published">
              {dayFormatter(published_date)} days ago
            </p>
          </StyledArticleInfo>
        </StyledArticleFooter>
      </StyledArticleBody>
    </Card>
  );
};

export default ArticleItem;
