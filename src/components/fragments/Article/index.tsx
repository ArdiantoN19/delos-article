import React, { useCallback, useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import FilterArticle from "./FilterArticle";
import ArticleList from "./ArticleList";
import ArticleContext from "@/contexts/Article";
import { TArticle } from "@/types/article";
import { getLocalStorage, showArticles } from "@/utils";
import { StyledArticle } from "./styles";

const Article: React.FC = () => {
  const localArticles: TArticle[] = getLocalStorage(
    process.env.VITE_ARTICLE_STORAGE_KEY!
  );

  const { articles, isLoading, error, hasLoading } = useContext(ArticleContext);
  const [searchParams] = useSearchParams();
  const [datas, setDatas] = useState<TArticle[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(1);
  const search = searchParams.get("search") || "";

  useEffect(() => {
    if (!search) {
      const result = showArticles(articles);
      setDatas(result);
    }
  }, [articles, search]);

  useEffect(() => {
    search ? setHasMore(false) : setHasMore(true);
    setOffset(1);
  }, [search, articles]);

  useEffect(() => {
    if (search) {
      const getData = setTimeout(() => {
        let filteredArticles = [...articles];
        filteredArticles = filteredArticles.filter(({ title }) => {
          return title.toLowerCase().includes(search);
        });

        setDatas(filteredArticles);
      }, 500);
      return () => clearTimeout(getData);
    }
  }, [articles, search]);

  const showMoreData = useCallback(() => {
    if (!search) {
      const result = showArticles(localArticles, offset);
      result.length > 0 ? setHasMore(true) : setHasMore(false);
      setDatas((prev) => [...prev, ...result]);
      setOffset((prev) => prev + 1);
    }
  }, [offset, search, localArticles]);

  return (
    <InfiniteScroll
      dataLength={datas.length}
      hasMore={hasMore}
      next={showMoreData}
      loader={<p>Loading...</p>}
    >
      <StyledArticle.StyledArticle id="article">
        <StyledArticle.StyledArticleTitle>
          Articles
        </StyledArticle.StyledArticleTitle>
        <FilterArticle />
        {error && <div>{error}</div>}
        {isLoading || hasLoading ? (
          <div>Loading...</div>
        ) : (
          <ArticleList articles={datas} />
        )}
      </StyledArticle.StyledArticle>
    </InfiniteScroll>
  );
};

export default Article;
