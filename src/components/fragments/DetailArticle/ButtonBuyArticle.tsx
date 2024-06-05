import React, { useContext } from "react";
import MainContext from "@/contexts/Main";
import delosService from "@/services";
import { TAddMyArticle } from "@/types/service";
import { StyledBuyButton } from "./styles";

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
    if (dataDelos.coins >= price) {
      const payload: TAddMyArticle = { id, isFree: price === 0, price };
      delosService.addMyArticle(payload);

      setDataDelos((prev) => ({
        ...prev,
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
        <StyledBuyButton.StyledShowMoreArticle
          to={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more Article
        </StyledBuyButton.StyledShowMoreArticle>
      ) : (
        <StyledBuyButton.StyledBuyArticle
          onClick={() => onBuyArticleHandler(id)}
        >
          Buy
        </StyledBuyButton.StyledBuyArticle>
      )}
    </div>
  );
};

export default ButtonBuyArticle;
