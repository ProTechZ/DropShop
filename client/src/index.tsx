import React from 'react';
import { render } from 'react-dom';
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';

import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
