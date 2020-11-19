import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import 'normalize.css';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

import GlobalStyle from './styles/global';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#15c3d6',
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
