import React, { useContext } from "react";
import styled from "styled-components";

import Button from "../../ui/Button";
import { COLORS, SIZES } from "../../../constants";
import MainContext from "../../../contexts/Main";
import delosService from "../../../services";
import { TAddMyArticle } from "../../../types/service";
import Link from "../../ui/Link";

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

const StyledShowMoreArticle = styled(Link)`
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

interface IButtonBuyArticle {
  price: number;
  id: number;
  url: string;
}

const ButtonBuyArticle: React.FC<IButtonBuyArticle> = ({ url, price, id }) => {
  const { dataDelos, setDataDelos } = useContext(MainContext);
  const checkArticleIsBuy = dataDelos.myArticles.some((data) => data.id === id);

  const onBuyArticleHandler = (id: number) => {
    const checkLengthIsFreeArticle = dataDelos.myArticles.filter(
      (data) => data.isFree === true
    ).length;
    if (price === 0 && checkLengthIsFreeArticle === 5) {
      alert("Your free article limit reached");
      return;
    }
    if (dataDelos.coins > price) {
      const payload: TAddMyArticle = { id, isFree: price === 0, price };
      delosService.addMyArticle(payload);

      setDataDelos((prev) => ({
        coins: prev.coins - price,
        myArticles: [...prev.myArticles, { id, isFree: price === 0 }],
      }));

      alert("success buy article, click read more button to see full article");
      return;
    }

    alert("Not enough coins");
  };
  return (
    <div>
      {checkArticleIsBuy ? (
        <StyledShowMoreArticle
          to={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more Article
        </StyledShowMoreArticle>
      ) : (
        <StyledBuyArticle onClick={() => onBuyArticleHandler(id)}>
          Buy
        </StyledBuyArticle>
      )}
    </div>
  );
};

export default ButtonBuyArticle;
