import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import '../src/fontawesome-free/css/all.min.css';
import '../src/simple-line-icons/css/simple-line-icons.css';
import '../src/landing-page.min.css';




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
