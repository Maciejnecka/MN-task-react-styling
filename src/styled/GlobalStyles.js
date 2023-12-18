import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   /* Global styles */
   --color-white-main: #ebebeb;
   --color-font-black: #222;
   --color-neon-green: #39ff14;
   --color-bar-progress: #4caf50;
   --transition: 0.5s;

   /* //////////////////////////////////// */
   /* Btn styles */
   --btn-box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;
   --btn-box-shadow-hover: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;

   /* //////////////////////////////////// */
   /* Input styles */
   --input-box-shadow: 3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4);
   --input-box-shadow-focus: 3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4),
            inset 3px 3px 10px rgba(0, 0, 0, 1), inset -1px -1px 6px rgba(255, 255, 255, 0.4);

   /* //////////////////////////////////// */
   /* Checkbox.styled */
   --checkbox-diameter: 20px;
   --checkbox-border-radius: 5px;
   --checkbox-border-width: 1px;
   --checkbox-border-style: solid;
   --checkmark-size: 1.2;

   /* //////////////////////////////////// */
}

`;

export default GlobalStyles;
