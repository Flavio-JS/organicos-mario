import styled, { css } from "styled-components";

export const IndexWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    @media (min-width: ${theme.breakpoints.md}) {
      padding: 0 5%;
    }
  `}
`;
