import { COLORS, FONTS, SIZES } from "../../../constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavBrand = styled(Link)`
  font-family: ${FONTS.bold};
  color: ${COLORS.darkGray};
  text-decoration: none;
  font-size: ${SIZES.xl};

  @media screen and (min-width: 768px) {
    font-size: ${SIZES["2xl"]};
  }
`;

const NavBrand: React.FC = () => {
  return (
    <StyledNavBrand to="/" title="Delos Article">
      Delos Article
    </StyledNavBrand>
  );
};

export default NavBrand;
