import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --color-font-main: #ebebeb;
   --color-neon-green: #39ff14;

   --btn-box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;
   --btn-box-shadow-hover: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;
   --transition: 0.5s;
}

`;

export default GlobalStyles;
