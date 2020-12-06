import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import '../src/scss/style.scss';

import App from './App.js';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
  document.getElementById('root'),
);