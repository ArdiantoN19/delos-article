import React from "react";
import HeroTitle from "./HeroTitle";
import { SIZES } from "../../../constants";
import styled from "styled-components";
import SearchArticle from "./SearchArticle";
import Cta from "../../ui/CTA";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  margin: auto;
  gap: ${SIZES.xl};
  margin-block-end: ${SIZES["5xl"]};

  @media screen and (min-width: 768px) {
    margin-block-start: ${SIZES["4xl"]};
  }
`;

const Hero: React.FC = () => {
  return (
    <StyledHero>
      <HeroTitle />
      <SearchArticle />
      <Cta href="#article" title="Jump To Articles" />
    </StyledHero>
  );
};

export default Hero;
