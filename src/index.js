import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/reducers';
import { BrowserRouter } from 'react-router-dom'

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composerEnhancer(applyMiddleware(thunk)));

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  app,
  document.getElementById('root')
)
