import React from 'react';
import { Navigation, Footer } from './main_layout/main_layout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import  { Home, Test, Register } from './pages/pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Router>
          <Switch>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Register />
            </Route>

            {/* DEFAULT ROUTE */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
