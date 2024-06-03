import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { SIZES } from "../../../constants";
import FilterArticle from "./FilterArticle";
import ArticleList from "./ArticleList";
import ArticleContext from "../../../contexts/Article";
import { useSearchParams } from "react-router-dom";
import { TArticle } from "../../../types/article";

const StyledArticle = styled.div`
  margin-bottom: ${SIZES["3xl"]};
`;

const StyledArticleTitle = styled.h2`
  font-family: Inter Semibold;
  font-size: ${SIZES["3xl"]};
  margin-bottom: ${SIZES["xl"]};
  padding-top: ${SIZES["3xl"]};

  @media screen and (min-width: 768px) {
    font-size: ${SIZES["3xl"]};
  }
`;

const Article: React.FC = () => {
  const { articles, isLoading, error, hasLoading } = useContext(ArticleContext);
  const [searchParams] = useSearchParams();
  const [datas, setDatas] = useState<TArticle[]>([] as TArticle[]);
  useEffect(() => {
    setDatas(articles);
  }, [articles]);

  useEffect(() => {
    const getData = setTimeout(() => {
      let filteredArticles = [...articles];
      filteredArticles = filteredArticles.filter(({ title }) => {
        return title.toLowerCase().includes(searchParams.get("search") || "");
      });

      setDatas(filteredArticles);
    }, 500);
    return () => clearTimeout(getData);
  }, [searchParams, articles]);

  return (
    <StyledArticle id="article">
      <StyledArticleTitle>Articles</StyledArticleTitle>
      <FilterArticle />
      {error && <div>{error}</div>}
      {isLoading || hasLoading ? (
        <div>Loading...</div>
      ) : (
        <ArticleList articles={datas} />
      )}
    </StyledArticle>
  );
};

export default Article;
