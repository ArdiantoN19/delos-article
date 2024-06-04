import styled from "styled-components";
import { COLORS, SIZES } from "../../../../constants";
import Button from "../../../ui/Button";

export const StyledButtonBuyTicket = styled(Button)`
  color: ${COLORS.primary};
  background-color: ${COLORS.orange};
  border-color: ${COLORS.orange};
  font-size: ${SIZES.xs};

  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.orange};
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: ${SIZES.sm};
  }
`;
