import React, { useCallback, useContext, useEffect } from "react";
import Input from "../../ui/Input";
import styled from "styled-components";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { COLORS, SIZES } from "../../../constants";
import { useSearchParams } from "react-router-dom";
import { createObjQuery } from "../../../utils";
import ArticleContext from "../../../contexts/Article";
import { TArticle } from "../../../types/article";

const StyledSearchArticle = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;

  & > .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${SIZES.xs};
    background-color: ${COLORS.primary};
    width: 30px;
  }
`;

const SearchArticle: React.FC = () => {
  const {
    articles,
    filteredArticles: defaultArticles,
    setFilteredArticles,
  } = useContext(ArticleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = createObjQuery(searchParams);
  const search = searchParams.get("search");

  const searchArticle = useCallback(() => {
    if (search) {
      let filteredArticles: TArticle[] = [...defaultArticles];
      filteredArticles = filteredArticles.filter(({ title }) =>
        title.toLowerCase().includes(search?.toLowerCase() || "")
      );
      setFilteredArticles(filteredArticles);
    } else {
      setFilteredArticles(articles);
    }
  }, [search, defaultArticles, setFilteredArticles, articles]);

  useEffect(() => {
    const getData = setTimeout(() => {
      searchArticle();
    }, 500);
    return () => clearTimeout(getData);
  }, [searchArticle]);

  const onInputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchParams({ ...queryParams, search: e.target.value });
    },
    [setSearchParams, queryParams]
  );

  return (
    <StyledSearchArticle>
      <Input
        placeholder="Type to search articles..."
        value={searchParams.get("search") || ""}
        onChange={onInputHandler}
      />
      <MagnifyingGlass size={20} className="icon" />
    </StyledSearchArticle>
  );
};

export default SearchArticle;
