import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
 margin:0;
 padding: 0;
 box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
body{
  font-family: 'Open Sans', sans-serif;
  background-color: gray;
  font-family: ${({ theme }) => theme.font.family.default};
}
h1,h2,h3,h4,h5,h6{

}
`;
