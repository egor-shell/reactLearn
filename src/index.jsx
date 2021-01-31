import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import App from './Components/App.jsx'
import { rootReducer } from './store/Reducers/index'

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);