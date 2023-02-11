import CartIcon from "@/components/Icons/CartIcon";
import HomeIcon from "@/components/Icons/HomeIcon";
import UserIcon from "@/components/Icons/UserIcon";
import styled, { css } from "styled-components";

export const HeaderMobileWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const HeaderMobileTop = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    padding: 0 16px;
    width: 100%;
    background-color: ${theme.colors.darkGreen};
  `}
`;

export const HeaderMobileIconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 16px;
  `}
`;

export const HeaderMobileHomeIcon = styled(HomeIcon)`
  ${({ theme }) => css``}
`;

export const HeaderMobileUserIcon = styled(UserIcon)`
  ${({ theme }) => css``}
`;

export const HeaderMobileCartIcon = styled(CartIcon)`
  ${({ theme }) => css``}
`;
