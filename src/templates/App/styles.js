import styled, { css } from 'styled-components';

export const H1 = styled.h1`
  background: ${({ theme }) => theme.colors.secondary};
  ${(props) => css`
  color:${props.color}

  `}
`;
