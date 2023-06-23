import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './templates/App';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
