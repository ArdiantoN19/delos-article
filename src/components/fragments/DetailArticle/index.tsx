import React, { useMemo } from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import { COLORS, SHADOWS, SIZES } from "../../../constants";
import Badge from "../../ui/Badge";
import { TArticle } from "../../../types/article";
import { dayFormatter, generateCoins } from "../../../utils";
import ButtonBuyArticle from "./ButtonBuyArticle";

const StyledDetailArticle = styled(Container)`
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-block-end: ${SIZES["3xl"]};

  @media screen and (min-width: 768px) {
    max-width: 900px;
  }
`;

const StyledDetailArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.sm};
  align-items: center;
  justify-content: center;
  margin-block-end: ${SIZES["3xl"]};

  @media screen and (min-width: 768px) {
    gap: ${SIZES.xl};
  }
`;

const StyledDetailArticleHeaderType = styled(Badge)`
  font-size: ${SIZES.xs};
`;
const StyledDetailArticleHeaderTitle = styled.h1`
  font-size: ${SIZES["3xl"]};
  font-family: Inter Bold;
  text-transform: capitalize;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: ${SIZES["5xl"]};
  }
`;

const StyledDetailArticleHeaderImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: ${SIZES.xs};
  box-shadow: ${SHADOWS.sm};
  background-color: ${COLORS.gray};
`;

const StyledDetailArticleBody = styled(StyledDetailArticleHeader)`
  align-items: start;
  justify-content: start;
`;

const StyledDetailArticleBodyInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDetailArticleBodyInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > .wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-right: 1px solid ${COLORS.darkGray};
    padding-right: 10px;

    & > .info-published {
      font-size: ${SIZES.xs};
      color: ${COLORS.gray};
    }
  }

  & > .coins {
    color: ${COLORS.orange};
  }
`;

const StyledDetailArticleBodyDescription = styled.p`
  font-size: ${SIZES.sm};
  text-align: justify;
`;

interface IDetailArticle extends TArticle {}

const DetailArticle: React.FC<IDetailArticle> = ({
  id,
  title,
  media,
  section,
  byline,
  published_date,
  abstract,
}) => {
  const coins = useMemo(
    () => generateCoins(dayFormatter(published_date)),
    [published_date]
  );

  return (
    <StyledDetailArticle>
      <StyledDetailArticleHeader>
        <div>
          <StyledDetailArticleHeaderType>
            {section}
          </StyledDetailArticleHeaderType>
        </div>
        <StyledDetailArticleHeaderTitle>{title}</StyledDetailArticleHeaderTitle>
        <StyledDetailArticleHeaderImage
          src={
            media.length
              ? media[0]["media-metadata"][1].url
              : "/images/default-image.png"
          }
        />
      </StyledDetailArticleHeader>
      <StyledDetailArticleBody>
        <StyledDetailArticleBodyInfoWrapper>
          <StyledDetailArticleBodyInfo>
            <div className="wrapper">
              <h5>{byline?.split(",")[0]} </h5>
              <small className="info-published">
                {dayFormatter(published_date)} days ago
              </small>
            </div>
            <h4 className="coins">{coins === 0 ? "Free" : `${coins} Coins`}</h4>
          </StyledDetailArticleBodyInfo>
          <ButtonBuyArticle price={coins} id={id} />
        </StyledDetailArticleBodyInfoWrapper>
        <StyledDetailArticleBodyDescription>
          {abstract}
        </StyledDetailArticleBodyDescription>
      </StyledDetailArticleBody>
    </StyledDetailArticle>
  );
};

export default DetailArticle;
