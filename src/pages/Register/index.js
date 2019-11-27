import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import PageTemplate from '../page_template';
import View from './view';
import { Button, Form ,Container} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
class Register extends PageTemplate{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      redirect: null,
      view: (<View 
        redirect = {this.state.redirect}
        formGroup = {this.formGroup}
        submitForm = {this.submitForm}
        bindForm = {this.bindForm}
      />)
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
    console.log(config);
    axios.post('http://0.0.0.0:8000/account/register', data, config)
      .then((result) => {
        console.log(result);
        const response = result.data;
        if(response.Status === true){
          this.setState({redirect : '/login'});   
        }
        else
          this.props.addAlert('Register gagal: '+response.Message, "danger");
      }).catch((e) => {
        this.props.addAlert('Register gagal: terjadi kesalahan pada server.', 'danger');
        if(e.response){
          this.props.addAlert(e.response.data, 'danger');
          console.log(e.response);
        }
      });
  }
  render(){
    if(this.state.redirect){
      this.props.addAlert('Register berhasil', "success");
      return <Redirect to={this.state.redirect} />;
    }
    else
      return(
        <div style={{backgroundImage: "url('/img/Blue1.jpg')", paddingTop: '50px',paddingBottom: '50px'}}>
        <Container style={{backgroundColor: "white"}}>
        <h3 style={{padding: '50px 100px 0px 500px',color:'#0080ff'}}>Register</h3>
          <Form onSubmit={this.submitForm}>
              {this.formGroup({
                  label: 'Nama Lengkap',
                  name: 'name',
                  type: 'text',
                  placeholder: 'Masukan nama lengkap',
                  onchange: this.bindForm
              })}
              {this.formGroup({
                  label: 'Email',
                  name: 'email',
                  type: 'email',
                  placeholder: 'Masukan alamat email',
                  onchange: this.bindForm
              })}
              {this.formGroup({
                  label: 'Password',
                  name: 'password',
                  type: 'password',
                  placeholder: 'Password',
                  onchange: this.bindForm
              })}
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
          </Container>
          </div>
        );
  }
}

export default Register;
