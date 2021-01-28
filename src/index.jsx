import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import App from './Components/App.jsx'
import initStore from './store/store'

ReactDOM.render(
  <Provider store={ initStore() }>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);