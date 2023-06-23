import styled, { css } from 'styled-components';

export const Title = styled.h1`
${({ theme }) => css`
color: ${theme.colors.primaryColor};
`}

text-transform:uppercase;
background:wheat;
`;
