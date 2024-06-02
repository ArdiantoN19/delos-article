import React from "react";
import useFetch from "../../../hooks/useFetch";
import styled from "styled-components";
import { SIZES } from "../../../constants";
import { TArticle } from "../../../types/article";
import FilterArticle from "./FilterArticle";
import ArticleList from "./ArticleList";

const StyledArticleTitle = styled.h2`
  font-family: Inter Semibold;
  font-size: ${SIZES["3xl"]};
  margin-bottom: ${SIZES["xl"]};

  @media screen and (min-width: 768px) {
    font-size: ${SIZES["3xl"]};
  }
`;

const Article: React.FC = () => {
  const [data, isLoading, error] = useFetch<TArticle[]>("/emailed/30.json");

  return (
    <div id="article">
      <StyledArticleTitle>Articles</StyledArticleTitle>
      <FilterArticle />
      {error && <div>{error}</div>}
      {isLoading ? <div>Loading...</div> : <ArticleList articles={data} />}
    </div>
  );
};

export default Article;
