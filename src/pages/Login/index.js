import React from 'react';
import './Login.css';
import PageTemplate from '../page_template';
import update from 'immutability-helper';
import axios from 'axios';
import queryString from 'query-string';
import View from './view';

class Login extends PageTemplate {
    constructor(props){
        super(props);
        this.state = { 
            view: (<View 
                formGroup = {this.formGroup}
                submitForm = {this.submitForm}
                bindForm = {this.bindForm}
            />),
            email: '',
            password: '',
            setAuth: null
        };
    }
    componentDidMount(){
        // map props to state
        if(this.props.state)
            this.setState(this.props.state);
    }
    submitForm = (e) => {
        e.preventDefault()
        const { email, password } = this.state;
        let config = {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            }
        };
        const data = queryString.stringify({ email, password }).replace(/%20/g,'+');
        axios.post('http://0.0.0.0:8000/account/login', data, config)
            .then((result) => {
            const response = result.data;
            if(response.Status === true){
                this.state.setAuth(response.Data);
                window.location.href = '/';
            }
            else
                this.props.addAlert('Login gagal: '+response.Message, "danger");
            });
    }
}

export default Login;
