import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import {
  BrowserRouter,
} from 'react-router-dom';

import App from './App';

import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  (
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  ),
  document.getElementById('root'),

);
