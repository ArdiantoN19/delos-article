import React from "react";
import HeroTitle from "./HeroTitle";
import SearchArticle from "./SearchArticle";
import Cta from "../../ui/CTA";
import { StyledHero } from "./styles";

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
