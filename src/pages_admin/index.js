import React from 'react';
import { Navigation, Footer } from '../main_layout';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import * as Pages from './pages';
class Admin extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      
      <Router>
        <div className="Admin">
          <header className="App-header">
          <Switch>
            <Route exact path='/' component={Pages.Home}  />
          </Switch>
          </header>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default Admin;
