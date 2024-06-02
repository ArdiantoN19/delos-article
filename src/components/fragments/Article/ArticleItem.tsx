import React from "react";
import styled from "styled-components";
import Card from "../../ui/Card";
import { COLORS, SHADOWS, SIZES } from "../../../constants";
import Link from "../../ui/Link";
import { TArticle } from "../../../types/article";

const StyledImage = styled.img`
  width: 400px;
  height: 200px;
  border-radius: ${SIZES.xs};
  object-fit: cover;
  box-shadow: ${SHADOWS.md};
  display: block;
`;

const StyledArticleBody = styled.div`
  width: 100%;
`;

const StyledArticleTitle = styled(Link)`
  font-size: ${SIZES.xl};
  font-family: Inter Semibold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 0;
  margin-block-end: ${SIZES.md};
`;

const StyledArticleTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES.xs};
  margin-bottom: ${SIZES.sm};

  & > .article-type,
  & > .article-category {
    font-size: ${SIZES.xs};
  }

  & > .article-category {
    background-color: ${COLORS.orange};
    color: ${COLORS.primary};
    padding: 6px ${SIZES.xs};
    border-radius: ${SIZES.xs};
  }
`;

const StyledArticleCoins = styled.h3`
  font-size: ${SIZES["2xl"]};
  font-family: Inter Bold;
  color: ${COLORS.orange};
  margin-bottom: ${SIZES["xl"]};
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
    font-size: ${SIZES.xs};
  }

  & > .info-published {
    color: ${COLORS.gray};
  }
`;

interface IArticleItem extends Partial<TArticle> {
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
  return (
    <Card>
      <StyledImage src={image} alt={title} />
      <StyledArticleBody>
        <StyledArticleTypeWrapper>
          <h5 className="article-type">{type}</h5> |
          <div className="article-category">{section}</div>
        </StyledArticleTypeWrapper>
        <StyledArticleTitle to={`/details/${id}`}>{title}</StyledArticleTitle>
        <StyledArticleCoins>30.000 coins</StyledArticleCoins>
        <StyledArticleFooter>
          <StyledArticleInfo>
            <h6 className="info-author">
              by {byline?.split(",")[0].replace("By", "")}
            </h6>
            <p className="info-published">⁕</p>
            <p className="info-published">{published_date}</p>
          </StyledArticleInfo>
        </StyledArticleFooter>
      </StyledArticleBody>
    </Card>
  );
};

export default ArticleItem;
