import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import dummyStore from './dummyStore';

ReactDOM.render(
  <BrowserRouter>
    <App store={dummyStore} />
  </BrowserRouter>,
  document.getElementById('root'),
);