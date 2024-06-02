import { COLORS, SIZES } from "../../constants";
import { NavLink as LinkRouter, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

const SyledLink = styled(LinkRouter)`
  color: ${COLORS.gray};
  text-decoration: none;
  font-size: ${SIZES.md};
  padding: ${SIZES.xs};

  &.active {
    color: ${COLORS.darkGray};
    font-weight: bold;
  }

  &:hover {
    color: ${COLORS.darkGray};
  }
`;

interface ILink extends NavLinkProps {}

const Link: React.FC<ILink> = ({ children, ...props }) => {
  return (
    <SyledLink {...props} to={props.to}>
      {children}
    </SyledLink>
  );
};

export default Link;
