import React from 'react';
import { createRoot } from 'react-dom/client';
import { Reset } from 'styled-reset';

import GlobalStyles from './styled/GlobalStyles';
import GlobalFonts from './fonts/GlobalFonts';

import App from './components/App';

const root = createRoot(document.querySelector('#root'));
root.render(
    <>
        <Reset />
        <GlobalStyles />
        <GlobalFonts />
        <App />
    </>,
);
