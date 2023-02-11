import MenuIcon from "@/components/Icons/MenuIcon";
import styled, { css } from "styled-components";

export const NavBarMobileWrapper = styled.div`
  ${({ theme }) => css`
    height: fit-content;
    width: fit-content;
    background-color: ${theme.colors.darkGreen}; //só para ver

    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
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
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
    width: 100%;
    z-index: 1;
    transform: ${isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 450ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  `}
`;

export const NavBarMobileOpenMenuUl = styled.ul`
  ${({ theme }) => css`
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    width: 90%;
    background-color: ${theme.colors.darkGreen};

    li {
      list-style-type: none;
      color: #fafafa;
      font-size: 18px;
      font-weight: ${theme.font.bold};
      padding: 10px 20px;
    }
  `}
`;
