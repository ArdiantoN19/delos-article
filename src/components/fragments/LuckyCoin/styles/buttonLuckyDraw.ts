import styled from "styled-components";
import { COLORS, SIZES } from "../../../../constants";
import { StyledButtonBuyTicket } from "./buttonBuyTicket";

export const StyledAvatar = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  background-color: ${COLORS.secondary};
  border-radius: ${SIZES.xs};
  padding: 10px;
`;

export const StyledButtonLuckyDraw = styled(StyledButtonBuyTicket)`
  height: 50px;
  font-size: ${SIZES.md};

  &:disabled {
    filter: brightness(0.8);
  }

  @media screen and (min-width: 768px) {
    height: 60px;
    font-size: ${SIZES.xl};
  }
`;
