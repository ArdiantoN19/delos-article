import React, { useCallback, useEffect } from "react";
import Input from "../../ui/Input";
import styled from "styled-components";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { COLORS, SIZES } from "../../../constants";
import { useSearchParams } from "react-router-dom";
import { createObjQuery } from "../../../utils";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = createObjQuery(searchParams);

  //   useEffect(() => {
  //     const getData = setTimeout(() => {
  //       console.log(searchParams.get("query"));
  //     }, 500);
  //     return () => clearTimeout(getData);
  //   }, [searchParams]);

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
