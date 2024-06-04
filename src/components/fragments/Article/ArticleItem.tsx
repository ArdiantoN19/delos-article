import React, { useMemo } from "react";
import Card from "../../ui/Card";
import { TArticle } from "../../../types/article";
import { dayFormatter, generateCoins } from "../../../utils";
import Badge from "../../ui/Badge";
import { StyledArticleItem } from "./styles";

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
      <StyledArticleItem.StyledImage src={image} alt={title} />
      <StyledArticleItem.StyledArticleBody>
        <StyledArticleItem.StyledArticleTypeWrapper>
          <h5 className="article-type">{type}</h5> |<Badge>{section}</Badge>
        </StyledArticleItem.StyledArticleTypeWrapper>
        <StyledArticleItem.StyledArticleTitle to={`/detail/${id}`}>
          {title}
        </StyledArticleItem.StyledArticleTitle>
        <StyledArticleItem.StyledArticleCoins>
          {coins === 0 ? "Free" : `${coins} Coins`}
        </StyledArticleItem.StyledArticleCoins>
        <StyledArticleItem.StyledArticleFooter>
          <StyledArticleItem.StyledArticleInfo>
            <h6 className="info-author">{byline?.split(",")[0]}</h6>
            <p className="info-published">⁕</p>
            <p className="info-published">
              {dayFormatter(published_date)} days ago
            </p>
          </StyledArticleItem.StyledArticleInfo>
        </StyledArticleItem.StyledArticleFooter>
      </StyledArticleItem.StyledArticleBody>
    </Card>
  );
};

export default ArticleItem;
