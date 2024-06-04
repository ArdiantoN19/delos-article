import React, { useCallback, useEffect, useMemo, useState } from "react";
import Hero from "../../components/fragments/Hero";
import Container from "../../components/ui/Container";
import Article from "../../components/fragments/Article";
import ArticleContext from "../../contexts/Article";
import { TArticle } from "../../types/article";
import useFetch from "../../hooks/useFetch";
import { getArticleByFilter } from "../../utils/api";
import delosService from "../../services";
import { getLocalStorage } from "../../utils";

const localArticles: TArticle[] = getLocalStorage(
  import.meta.env.VITE_ARTICLE_STORAGE_KEY
);

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<TArticle[]>([]);
  const [data, isLoading, error] = useFetch<TArticle[]>([
    getArticleByFilter("emailed"),
    getArticleByFilter("shared"),
    getArticleByFilter("viewed"),
  ]);
  const [hasLoading, setHasLoading] = useState<boolean>(false);

  const setData = useCallback(() => {
    if (!isLoading) {
      setArticles(!localArticles?.length ? data : localArticles || []);
      delosService.addArticles(data);
    }
  }, [isLoading, data]);

  useEffect(() => {
    setData();
  }, [setData]);

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
