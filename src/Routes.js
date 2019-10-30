import React from "react";
import  * as Pages from './pages/pages';
import Cookies from 'js-cookie';

const Routes = {
  "/": () => <Pages.Home />,
  "/login": () => <Pages.Login />,
  "/register": () => <Pages.Register />,
  "/secret" : () => (getSession())? 
                        <Pages.Secret />:
                        <Pages.Login  state={ {info : [ { message:"Login terlebih dahulu.", show: true} ]} } />,
  "/test" : () => <Pages.Test />
};


const getSession = () => {
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
  
const logOut = () => {
  Cookies.remove('__session')
}

export default Routes;