import styled from "styled-components";
import { SIZES } from "../../../../constants";

export const StyledLuckyCoinBody = styled.div`
  width: 100%;
  min-height: 50dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${SIZES["3xl"]};

  & > .ticket {
    font-size: ${SIZES["3xl"]};
  }
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
