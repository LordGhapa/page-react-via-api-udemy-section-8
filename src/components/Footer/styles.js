/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.footer`
${({ theme }) => css`
text-align: center;
font-size: ${theme.font.sizes.small};
a{
  color: inherit;
  text-decoration: none;
}

`}
`;
