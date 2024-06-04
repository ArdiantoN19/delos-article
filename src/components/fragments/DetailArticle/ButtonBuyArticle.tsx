import React, { useContext } from "react";
import styled from "styled-components";

import Button from "../../ui/Button";
import { COLORS } from "../../../constants";
import MainContext from "../../../contexts/Main";
import { addMyArticle } from "../../../services";
import { TAddMyArticle } from "../../../types/service";

const StyledBuyArticle = styled(Button)`
  color: ${COLORS.orange};
  background-color: ${COLORS.primary};
  border-color: ${COLORS.orange};
  width: 80px;

  &:hover {
    background-color: ${COLORS.orange};
    color: ${COLORS.primary};
  }
`;
const ButtonBuyArticle: React.FC<{ price: number; id: number }> = ({
  price,
  id,
}) => {
  const { coins, setCoins } = useContext(MainContext);

  const onBuyArticleHandler = (id: number) => {
    if (coins > price) {
      const payload: TAddMyArticle = { id, isFree: price === 0, price };
      addMyArticle(payload);
      setCoins((prev) => prev - price);
    } else {
      alert("Not enough coins");
    }
  };
  return (
    <div>
      <StyledBuyArticle onClick={() => onBuyArticleHandler(id)}>
        Buy
      </StyledBuyArticle>
    </div>
  );
};

export default ButtonBuyArticle;
