import CartIcon from "@/components/Icons/CartIcon";
import styled, { css } from "styled-components";

export const CartCardWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.md}) {
      display: flex;
      justify-content: left;
      align-items: center;
      height: 50px;
      width: 250px;
      border: 1px solid ${theme.colors.darkGreen};

      :hover {
        cursor: pointer;
      }
    }
  `}
`;

export const CartCardIcon = styled(CartIcon)`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.md}) {
      display: flex;
      height: 100%;
      width: fit-content;
      padding: 8px;
      border: 1px solid ${theme.colors.darkGreen};
      background-color: ${theme.colors.darkGreen};
      transition: opacity 0.25s;

      :hover {
        opacity: 0.9;
      }
    }
  `}
`;

export const CartCardAmountWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.md}) {
      display: flex;
      font-size: ${theme.font.size.md};
      padding: 0 8px;
    }
  `}
`;

export const CartCardTextWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.md}) {
      display: block;

      h2 {
        font-size: ${theme.font.size.xs};
      }
      p {
        font-size: ${theme.font.size.xxs};
      }
    }
  `}
`;
