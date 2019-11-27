import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes';
import Admin from './pages_admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import '../src/fontawesome-free/css/all.min.css';
import '../src/simple-line-icons/css/simple-line-icons.css';
import '../src/landing-page.min.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';



ReactDOM.render(
<Router>
    <Switch>
        <Route path='/admin' component={Admin} />
        
        <Route path='/' component={App} />
    </Switch>
</Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
