import styled from "styled-components";
import { SIZES } from "@/constants";

export const StyledWrapperFilter = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES.xs};
  margin-bottom: ${SIZES["xl"]};

  @media screen and (min-width: 768px) {
    margin-bottom: ${SIZES["3xl"]};
  }
`;
