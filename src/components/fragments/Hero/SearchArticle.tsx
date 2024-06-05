import React, { useCallback } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useSearchParams } from "react-router-dom";
import Input from "@/components/ui/Input";
import { createObjQuery } from "@/utils";
import { StyledSearchArticle } from "./styles";

const SearchArticle: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = createObjQuery(searchParams);

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
