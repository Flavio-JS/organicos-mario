import styled, { css } from "styled-components";

export const IndexWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0 10%;
  `}
`;
