import React from "react";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import styled from "styled-components";
import { SIZES } from "../../../constants";
import Container from "../../ui/Container";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SIZES.xs};
`;

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
