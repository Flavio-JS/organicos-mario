import MenuIcon from "@/components/Icons/MenuIcon";
import styled, { css } from "styled-components";

export const NavBarMobileWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
  `}
`;

export const NavBarMobileMenuIcon = styled(MenuIcon)`
  ${({ theme }) => css`
    :hover {
      cursor: pointer;
    }
  `}
`;

interface INavBarMobileOpenMenuProps {
  isOpen: boolean;
}

export const NavBarMobileOpenMenu = styled.div<INavBarMobileOpenMenuProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    width: ${isOpen ? "300px" : "0"};
    overflow: hidden;
    transition: width 1s;
    background-color: ${theme.colors.darkGreen};

    li {
      list-style-type: none;
    }
  `}
`;
