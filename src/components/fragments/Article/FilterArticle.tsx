import React, { useCallback, useContext, useEffect } from "react";
import styled from "styled-components";
import { SIZES } from "../../../constants";
import Button from "../../ui/Button";
import { useSearchParams } from "react-router-dom";
import { createObjQuery } from "../../../utils";
import ArticleContext from "../../../contexts/Article";
import { getArticleByFilter } from "../../../utils/api";
import { TFilter } from "../../../types/api";

const StyledWrapperFilter = styled.div`
    display: flex;
    align-items-center;
    gap: ${SIZES.xs};
    margin-bottom: ${SIZES["xl"]};
    
    @media screen and (min-width: 768px) {
        margin-bottom: ${SIZES["3xl"]};
    }
`;

const FilterValues: string[] = ["all", "emailed", "shared", "viewed"];

const FilterArticle: React.FC = () => {
  const { setArticles, setHasLoading } = useContext(ArticleContext);
  const [searchParams, setSearchParams] = useSearchParams({
    filter: FilterValues[0],
  });
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
      if (filter) {
        setHasLoading(true);
        const articles = await getArticleByFilter(
          filter === "all" ? "emailed" : (filter as TFilter)
        );
        setArticles(articles.data);
        setHasLoading(false);
      }
    })();
  }, [filter, setArticles, setHasLoading]);

  return (
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
  );
};

export default FilterArticle;
