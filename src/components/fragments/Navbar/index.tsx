import React from "react";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import Container from "../../ui/Container";
import { StyledNav } from "./styles";

const Navbar: React.FC = () => {
  return (
    <header>
      <Container>
        <StyledNav>
          <NavBrand />
          <NavMenu />
        </StyledNav>
      </Container>
    </header>
  );
};

export default Navbar;
