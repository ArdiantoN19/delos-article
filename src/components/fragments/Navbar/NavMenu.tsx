import React from "react";
import styled from "styled-components";
import Link from "../../ui/Link";
import { COLORS, SIZES } from "../../../constants";
import { List, X } from "@phosphor-icons/react";
import Button from "../../ui/Button";

const StyledNavMenu = styled.div<{ $isShow: boolean }>`
  display: flex;
  gap: ${SIZES.xs};
  align-items: center;

  @media screen and (max-width: 1023px) {
    position: fixed;
    top: calc(${SIZES["6xl"]} + 8px);
    right: ${(props) => (props.$isShow ? 0 : "-100%")};
    height: 100dvh;
    width: 70%;
    flex-direction: column;
    align-items: start;
    gap: 0;
    z-index: 100;
    background-color: ${COLORS.primary};
    transition: right 0.125s ease-in-out;

    &::before {
      content: "";
      top: calc(${SIZES["6xl"]} + 8px);
      left: 0;
      width: 30%;
      position: fixed;
      background: rgba(0, 0, 0, 0.6);
      height: 100dvh;
      backdrop-filter: blur(5px);
      z-index: 49;
      opacity: ${(props) => (props.$isShow ? 1 : 0)};
      transition: opacity 0.125s ease-in-out;
    }
  }
`;

const StyledNavToggler = styled(Button)`
  background: transparent;
  border: none;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavMenu: React.FC = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const onIsShowHandler = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <StyledNavMenu $isShow={isShow}>
        <Link to="/">Home</Link>
        <Link to="/lucky">Lucky</Link>
      </StyledNavMenu>
      <StyledNavToggler onClick={onIsShowHandler}>
        {isShow ? <X size={24} /> : <List size={24} />}
      </StyledNavToggler>
    </>
  );
};

export default NavMenu;
