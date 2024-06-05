import React, { useMemo } from "react";
import { TArticle } from "@/types/article";
import { dayFormatter, generateCoins } from "@/utils";
import ButtonBuyArticle from "./ButtonBuyArticle";
import { StyledDetailArticle } from "./styles";

interface IDetailArticle extends TArticle {}

const DetailArticle: React.FC<IDetailArticle> = ({
  id,
  title,
  media,
  section,
  byline,
  published_date,
  abstract,
  url,
}) => {
  const coins = useMemo(
    () => generateCoins(dayFormatter(published_date)),
    [published_date]
  );

  return (
    <StyledDetailArticle.StyledDetailArticle>
      <StyledDetailArticle.StyledDetailArticleHeader>
        <div>
          <StyledDetailArticle.StyledDetailArticleHeaderType>
            {section}
          </StyledDetailArticle.StyledDetailArticleHeaderType>
        </div>
        <StyledDetailArticle.StyledDetailArticleHeaderTitle>
          {title}
        </StyledDetailArticle.StyledDetailArticleHeaderTitle>
        <StyledDetailArticle.StyledDetailArticleHeaderImage
          src={
            media.length
              ? media[0]["media-metadata"][1].url
              : "/images/default-image.png"
          }
        />
      </StyledDetailArticle.StyledDetailArticleHeader>
      <StyledDetailArticle.StyledDetailArticleBody>
        <StyledDetailArticle.StyledDetailArticleBodyInfoWrapper>
          <StyledDetailArticle.StyledDetailArticleBodyInfo>
            <div className="wrapper">
              <h5>{byline?.split(",")[0]} </h5>
              <small className="info-published">
                {dayFormatter(published_date)} days ago
              </small>
            </div>
            <h4 className="coins">{coins === 0 ? "Free" : `${coins} Coins`}</h4>
          </StyledDetailArticle.StyledDetailArticleBodyInfo>
          <ButtonBuyArticle price={coins} id={id} url={url} />
        </StyledDetailArticle.StyledDetailArticleBodyInfoWrapper>
        <StyledDetailArticle.StyledDetailArticleBodyDescription>
          {abstract}
        </StyledDetailArticle.StyledDetailArticleBodyDescription>
      </StyledDetailArticle.StyledDetailArticleBody>
    </StyledDetailArticle.StyledDetailArticle>
  );
};

export default DetailArticle;
