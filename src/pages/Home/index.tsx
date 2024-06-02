import React from "react";
import Hero from "../../components/fragments/Hero";
import Container from "../../components/ui/Container";
import Article from "../../components/fragments/Article";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Hero />
      <Article />
    </Container>
  );
};

export default HomePage;
