import { createGlobalStyle } from 'styled-components';

import QuicksandLight from './Quicksand/Quicksand-Light.ttf';
import QuicksandRegular from './Quicksand/Quicksand-Regular.ttf';
import QuicksandBold from './Quicksand/Quicksand-Bold.ttf';

import NunitoLight from './Nunito_Sans/NunitoSans_7pt-Light.ttf';
import NunitoLightItalic from './Nunito_Sans/NunitoSans_7pt-LightItalic.ttf';
import NunitoMedium from './Nunito_Sans/NunitoSans_7pt-Medium.ttf';
import NunitoBold from './Nunito_Sans/NunitoSans_7pt-Bold.ttf';

const fontFiles = [
    {
        family: 'Quicksand',
        weights: [
            { weight: 300, file: QuicksandLight },
            { weight: 400, file: QuicksandRegular },
            { weight: 700, file: QuicksandBold },
        ],
    },
    {
        family: 'Nunito Sans',
        weights: [
            { weight: 300, file: NunitoLight },
            { weight: 300, file: NunitoLightItalic, style: 'italic' },
            { weight: 500, file: NunitoMedium },
            { weight: 700, file: NunitoBold },
        ],
    },
];

const createFontFace = ({ family, weights }) =>
    weights
        .map(
            ({ weight, file, style = 'normal' }) => `
    @font-face {
      font-family: '${family}';
      src: local('${family}'), local('${family}'),
        url(${file}) format('truetype');
      font-weight: ${weight};
      font-style: ${style};
    }
  `,
        )
        .join('\n');

const GlobalFonts = createGlobalStyle`
  ${fontFiles.map(createFontFace).join('\n')}
  body {
    font-family: 'Nunito Sans', 'Quicksand', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
  }
`;

export default GlobalFonts;
