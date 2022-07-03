import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { parsePath } from 'utils/helpers';

import './index.css';

import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
    <Router basename={parsePath()} history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);
