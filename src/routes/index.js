import React from 'react';
import { Navigation, Footer } from '../main_layout';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import * as Pages from '../pages';
// import Routes from './Routes';
// import { useRoutes } from 'hookrouter';
import './index.css';
import Cookies from 'js-cookie';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      authorization: null
    }
    this.setAuth = this.setAuth.bind(this);
    this.clearAuth = this.clearAuth.bind(this);
  }
  getSession(){
    const jwt = Cookies.get('__session')
    let session
    try {
      if (jwt) {
        const base64Url = jwt.split('.')[1]
        const base64 = base64Url.replace('-', '+').replace('_', '/')
        // what is window.atob ?
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
        session = JSON.parse(window.atob(base64))
      }
    } catch (error) {
      console.log(error)
    }  return session
  }

  setAuth(token){
    this.setState({
      authorization: token
    });
  }

  clearAuth(){
    this.setState({
      authorization: null
    });
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path='/login' component={() => {
              return this.authorization? 
                <Pages.Home /> :
                <Pages.Login state={
                  {
                    setAuth: this.setAuth
                  }
                } />
            }} />
            <Route path='/register' component={Pages.Register} />
            <Route path='/artikel' component={Pages.Artikel} />
            <Route path='/forum' component={Pages.Forum} />
            <Route path='/secret' component={ () => {
                return this.getSession()? 
                  <Pages.Secret /> : 
                  <Pages.Login state={ 
                    {
                      alertMessage : [{ 
                        message:"Anda harus login terlebih dahulu.", 
                        show: true,
                        variant: "danger"
                      }],
                      setAuth: this.setAuth
                    } }/>;
              }
            } />
            <Route path='/test' component={Pages.Test} />
            <Route exact path='/' component={Pages.Home}  />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
