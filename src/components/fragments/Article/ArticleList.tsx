import React from "react";
import styled from "styled-components";
import { SIZES } from "../../../constants";
import ArticleItem from "./ArticleItem";
import { TArticle } from "../../../types/article";

const StyledArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${SIZES["xl"]};

  @media screen and (min-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${SIZES["2xl"]};
  }
`;

const ArticleList: React.FC<{ articles: TArticle[] }> = ({ articles }) => {
  if (!articles) {
    return null;
  }

  if (!articles.length) {
    return <div>No articles found</div>;
  }

  console.log();
  return (
    <StyledArticleList>
      {articles.map((article, index) => (
        <ArticleItem
          {...article}
          key={article.id + index}
          image={
            article.media.length
              ? article.media[0]["media-metadata"][0].url
              : "/images/default-image.png"
          }
        />
      ))}
    </StyledArticleList>
  );
};

export default ArticleList;
