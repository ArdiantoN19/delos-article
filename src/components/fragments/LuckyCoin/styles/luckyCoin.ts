import styled from "styled-components";
import { SIZES } from "../../../../constants";

export const StyledLuckyCoin = styled.div`
  width: 100%;
  height: 80dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledLuckyCoinHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & .title {
    font-size: ${SIZES["2xl"]};
    font-family: Inter Bold;
    margin-bottom: 4px;
  }
`;
