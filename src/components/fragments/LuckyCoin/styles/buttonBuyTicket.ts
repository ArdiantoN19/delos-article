import styled from "styled-components";
import { COLORS } from "../../../../constants";
import Button from "../../../ui/Button";

export const StyledButtonBuyTicket = styled(Button)`
  color: ${COLORS.primary};
  background-color: ${COLORS.orange};
  border-color: ${COLORS.orange};
  height: 40px;

  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.orange};
  }
`;
