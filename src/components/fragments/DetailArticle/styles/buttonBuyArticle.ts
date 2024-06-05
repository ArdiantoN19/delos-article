import styled from "styled-components";
import Button from "@/components/ui/Button";
import { COLORS, SIZES } from "@/constants";
import Link from "@/components/ui/Link";

export const StyledBuyArticle = styled(Button)`
  color: ${COLORS.orange};
  background-color: ${COLORS.primary};
  border-color: ${COLORS.orange};
  width: 80px;

  &:hover {
    background-color: ${COLORS.orange};
    color: ${COLORS.primary};
  }
`;

export const StyledShowMoreArticle = styled(Link)`
  color: ${COLORS.orange};
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.orange};
  border-radius: ${SIZES.xs};
  font-size: ${SIZES.sm};

  &:hover {
    background-color: ${COLORS.orange};
    color: ${COLORS.primary};
  }
`;
