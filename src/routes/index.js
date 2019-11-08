import React from 'react';
import { Navigation, Footer } from '../main_layout';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from './Routes';
import { useRoutes } from 'hookrouter';

import './index.css';

function App(){
  const routeResult = useRoutes(Routes);
  return (
    <Router>
      <div className="App">
        <Navigation />
          { routeResult }
        <Footer />
      </div>
    </Router>
  );
}


export default App;
