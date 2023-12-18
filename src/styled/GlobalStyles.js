import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --color-font-main: #ebebeb;
   --color-font-black: #222;
   --color-neon-green: #39ff14;

   --btn-box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;
   --btn-box-shadow-hover: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;
  --input-box-shadow: 3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4);
  --input-box-shadow-focus: 3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4),
            inset 3px 3px 10px rgba(0, 0, 0, 1), inset -1px -1px 6px rgba(255, 255, 255, 0.4);

   --transition: 0.5s;

}

`;

export default GlobalStyles;
