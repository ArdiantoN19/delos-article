import React from "react";
import styled from "styled-components";
import { SIZES } from "../../../constants";
import ArticleItem from "./ArticleItem";
import { TArticle } from "../../../types/article";

const StyledArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${SIZES["2xl"]};
`;

const ArticleList: React.FC<{ articles: TArticle[] }> = ({ articles }) => {
  if (!articles) {
    return null;
  }
  return (
    <StyledArticleList>
      {articles.map((article) => (
        <ArticleItem
          {...article}
          key={article.id}
          // image={article.media["media-metadata"][1].url}
          image={"https://picsum.photos/200/300"}
        />
      ))}
    </StyledArticleList>
  );
};

export default ArticleList;
