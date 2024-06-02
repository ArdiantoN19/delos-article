import React, { useCallback } from "react";
import styled from "styled-components";
import { SIZES } from "../../../constants";
import Button from "../../ui/Button";
import { useSearchParams } from "react-router-dom";
import { createObjQuery } from "../../../utils";

const StyledWrapperFilter = styled.div`
    display: flex;
    align-items-center;
    gap: ${SIZES.xs};
    margin-bottom: ${SIZES["xl"]};
    
    @media screen and (min-width: 768px) {
        margin-bottom: ${SIZES["3xl"]};
    }
`;

const FilterValues = ["all", "emailed", "shared", "viewed"];

const FilterArticle: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    filter: FilterValues[0],
  });
  const queryParams = createObjQuery(searchParams);

  const onFilterHandler = useCallback(
    (filter: string) => {
      setSearchParams({ ...queryParams, filter });
    },
    [setSearchParams, queryParams]
  );

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
