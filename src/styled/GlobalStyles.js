import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --color-main: #f9f9f9;
}

body {
   background-color: var(--color-main);
}
`;

export default GlobalStyles;
