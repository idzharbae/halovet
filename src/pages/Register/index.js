import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import PageTemplate from '../page_template';
import View from './view';

class Register extends PageTemplate{
  constructor(props) {
    super(props);
    this.state = {
      view: (<View 
        formGroup = {this.formGroup}
        submitForm = {this.submitForm}
        bindForm = {this.bindForm}
      />),
      name: '',
      email: '',
      password: ''
    };
  }

  submitForm = (e) => {
    e.preventDefault()
    const { name, email, password } = this.state;
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    const data = queryString.stringify({ name, email, password }).replace(/%20/g,'+');
    console.log(data);
    axios.post('http://0.0.0.0:8000/account/register', data, config)
      .then((result) => {
        console.log(result);
        const response = result.data;
        if(response.Status === true)
          window.location.href = '/login?redirectionMessage=Silahkan%20login.';
        else
          this.props.addAlert('Register gagal: '+response.Message, "danger");
      }).catch((e) => {
        this.props.addAlert('Register gagal: terjadi kesalahan pada server.', 'danger');
        this.props.addAlert(e.response.data, 'danger');
        console.log(e.response);
      });
  }
}

export default Register;
