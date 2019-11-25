import React from 'react';
import { Navigation, Footer } from '../main_layout';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import * as Pages from '../pages';
import { Alert } from 'react-bootstrap';
import './index.css';
import update from 'immutability-helper';
import { setCookie, deleteCookie, getCookie } from '../helper/cookies';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      alertMessage: []
    }
    this.setAuth = this.setAuth.bind(this);
    this.clearAuth = this.clearAuth.bind(this);
    this.addAlert = this.addAlert.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }

  setAuth(token){
    setCookie("jwt", token, {path: "/"});
  }

  clearAuth(){
    deleteCookie('jwt');
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }
  
  addAlert(message, variant){
    this.setState({
      alertMessage: update(
          this.state.alertMessage, {
              $push : [
                  {
                      message: message, 
                      show: true,
                      variant: variant
                  }
              ] 
          })
    })
  }

  closeAlert(index){
    this.setState({
      alertMessage: update(
          this.state.alertMessage, { 
              // index harus di kurungin gini kalau pakai variable
              [index] : {
                  $set: { 
                      show:false 
                  } 
              } 
          } )
    })
  }
  
  renderAlert(val, index){
      return <Alert 
          hidden={ !val.show }
          variant={ val.variant }
          key={ index } 
          dismissible 
          onClose={ () => this.closeAlert(index) }>{ val.message } </Alert >;
  }

  render(){
    const arr = this.state.alertMessage;
    console.log('cookie');
    console.log(getCookie('jwt'));
    return (
      
      <Router>
        <div className="App">
          <Navigation login={ getCookie('jwt') !== '' } />
          <header className="App-header">
            { arr.map( (val, index) => this.renderAlert(val, index) )}
          <Switch>
            <Route path='/login' component={() => {
              if (getCookie('jwt')){
                this.addAlert('Anda sudah login.', 'danger');
                return <Redirect to='/' component={Pages.Home} />;
              }
              else
                return <Pages.Login state={
                  {
                    setAuth: this.setAuth
                  }
                } addAlert={ this.addAlert } />;
            }} />
            <Route path='/register' component={() => {
              return <Pages.Register 
                addAlert = { this.addAlert }
               />
            }} />
            <Route path='/artikel' component={Pages.Artikel} />
            <Route path='/forum' component={Pages.Forum} />
            <Route path='/secret' component={ () => {
                return (getCookie('jwt'))? 
                  <Pages.Secret /> : 
                  <Pages.Login 
                  state={ 
                    {
                      alertMessage : [{ 
                        message:"Anda harus login terlebih dahulu.", 
                        show: true,
                        variant: "danger"
                      }],
                      setAuth: this.setAuth
                    } }
                    addAlert = { this.addAlert }
                  />;
              }
            } />
            <Route path='/logout' component={() => {
              this.clearAuth();
              this.addAlert('Anda berhasil logout','success');
              return <Redirect to='/' component={ Pages.Home }/>
            }} />
            <Route path='/test' component={Pages.Test} />
            <Route path='/booking' component={Pages.Booking} />
            <Route path='/forum' component={Pages.Forum} />
            <Route path='/artikel' component={Pages.Artikel} />
            <Route path='/single' component={Pages.Single} />
            <Route path='/profil' component={Pages.Profil} />
            <Route exact path='/' component={Pages.Home}  />
          </Switch>
          </header>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
