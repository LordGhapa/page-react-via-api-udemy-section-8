/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
text-decoration: none;
color: inherit;
display: flex;
align-items: center;
>img{
  max-height: 3rem;
  width: 100%;
}

`}
`;
