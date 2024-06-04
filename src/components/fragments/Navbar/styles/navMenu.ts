import styled from "styled-components";
import { COLORS, SIZES } from "../../../../constants";
import Button from "../../../ui/Button";

export const StyledNavMenu = styled.div<{ $isShow: boolean }>`
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
    padding-left: ${SIZES.xs};
    background-color: ${COLORS.primary};
    transition: right 0.125s ease-in-out;

    &::before {
      content: "";
      top: calc(${SIZES["6xl"]} + 8px);
      left: ${(props) => (props.$isShow ? 0 : "-100%")};
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

export const StyledNavToggler = styled(Button)`
  background: transparent;
  border: none;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const StyledCoins = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${COLORS.orange};
  font-weight: bold;
`;
