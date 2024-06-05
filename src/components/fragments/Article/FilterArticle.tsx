import React, { useCallback, useContext, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { useSearchParams } from "react-router-dom";
import { createObjQuery, getLocalStorage } from "@/utils";
import ArticleContext from "@/contexts/Article";
import { getArticleByFilter } from "@/utils/api";
import { TFilter } from "@/types/api";
import delosService from "@/services";
import { TArticle } from "@/types/article";
import { StyledWrapperFilter } from "./styles";

const FilterValues: string[] = ["all", "emailed", "shared", "viewed"];

const FilterArticle: React.FC = () => {
  const { setArticles, setHasLoading } = useContext(ArticleContext);
  const [searchParams, setSearchParams] = useSearchParams({
    filter: FilterValues[0],
  });
  const [error, setError] = useState<string>("");
  const queryParams = createObjQuery(searchParams);
  const filter = searchParams.get("filter");

  const onFilterHandler = useCallback(
    (filter: string) => {
      setSearchParams({ ...queryParams, filter });
    },
    [setSearchParams, queryParams]
  );

  useEffect(() => {
    (async () => {
      setHasLoading(true);
      try {
        let articles: TArticle[] = [];
        if (filter && filter !== FilterValues[0]) {
          const response = await getArticleByFilter(filter as TFilter);
          if (response.status !== "success") {
            throw new Error(response.error);
          }
          articles = response.data;
        }

        if (filter === "all") {
          articles = getLocalStorage(process.env.VITE_ARTICLE_STORAGE_KEY!);
        }

        setArticles(articles);
        delosService.addArticles(articles);
      } catch (error) {
        setError("something went wrong");
      } finally {
        setHasLoading(false);
      }
    })();
  }, [filter, setArticles, setHasLoading]);

  return (
    <>
      <StyledWrapperFilter>
        {FilterValues.map((filter, index) => (
          <Button
            className={searchParams.get("filter") === filter ? "active" : ""}
            onClick={() => onFilterHandler(filter)}
            key={filter + index}
          >
            {filter}
          </Button>
        ))}
      </StyledWrapperFilter>
      {error && <p>{error}</p>}
    </>
  );
};

export default FilterArticle;
