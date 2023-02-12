import styled, { css } from "styled-components";

export const NavBarDesktopWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.md}) {
      display: block;
      background-color: ${theme.colors.darkGreen};
      padding: 0 16px;
    }
  `}
`;

export const NavBarDesktopList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    li {
      margin: 15px 0;
      font-size: ${theme.font.size.sm};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.white};
      list-style: none;

      :hover {
        cursor: pointer;
      }
    }
  `}
`;
