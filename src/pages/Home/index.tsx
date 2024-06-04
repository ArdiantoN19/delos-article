import React, { useCallback, useEffect, useMemo, useState } from "react";
import Hero from "../../components/fragments/Hero";
import Container from "../../components/ui/Container";
import Article from "../../components/fragments/Article";
import ArticleContext from "../../contexts/Article";
import { TArticle } from "../../types/article";
import useFetch from "../../hooks/useFetch";
import { getArticleByFilter } from "../../utils/api";
import delosService from "../../services";
import useFirstRender from "../../hooks/useFirstRender";

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<TArticle[]>([]);
  const [data, isLoading, error] = useFetch<TArticle[]>([
    getArticleByFilter("emailed"),
  ]);
  const [hasLoading, setHasLoading] = useState<boolean>(false);

  const setData = useCallback(() => {
    setArticles(!isLoading ? data : []);
    delosService.addArticles(!isLoading ? data : []);
  }, [data, isLoading]);

  useFirstRender(setData);

  const value = useMemo(
    () => ({
      articles,
      setArticles,
      isLoading,
      error,
      hasLoading,
      setHasLoading,
    }),
    [articles, isLoading, error, hasLoading]
  );

  return (
    <ArticleContext.Provider value={value}>
      <Container>
        <Hero />
        <Article />
      </Container>
    </ArticleContext.Provider>
  );
};

export default HomePage;
