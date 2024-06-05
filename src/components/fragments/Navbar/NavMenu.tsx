import React, { useContext, useState } from "react";
import { Coin, List, X } from "@phosphor-icons/react";
import Link from "@/components/ui/Link";
import MainContext from "@/contexts/Main";
import { StyledNavMenu } from "./styles";

const NavMenu: React.FC = () => {
  const { dataDelos, isLoading } = useContext(MainContext);
  const [isShow, setIsShow] = useState<boolean>(false);
  const onIsShowHandler = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <StyledNavMenu.StyledNavMenu $isShow={isShow}>
        <Link to="/">Home</Link>
        <Link to="/lucky">Lucky</Link>
        <StyledNavMenu.StyledCoins>
          <Coin size={24} />
          {isLoading ? "000" : dataDelos?.coins || 100000}
        </StyledNavMenu.StyledCoins>
      </StyledNavMenu.StyledNavMenu>
      <StyledNavMenu.StyledNavToggler onClick={onIsShowHandler}>
        {isShow ? <X size={24} /> : <List size={24} />}
      </StyledNavMenu.StyledNavToggler>
    </>
  );
};

export default NavMenu;
