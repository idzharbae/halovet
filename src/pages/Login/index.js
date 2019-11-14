import React from 'react';
import { Button, Form, Col, Alert } from 'react-bootstrap';
import './Login.css';
import update from 'immutability-helper';
import axios from 'axios';
import queryString from 'query-string';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            email: '',
            password: '',
            setAuth: null
        };
    }
    componentDidMount(){
        // map props to state
        if(this.props.state)
            this.setState(this.props.state);
        // get redirection message from url param
        const urlParams = new URLSearchParams(window.location.search);
        const data = urlParams.get('redirectionMessage');
        if(data)
            this.props.addAlert(data, "success");
    }

    componentWillUnmount(){
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
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
                this.state.setAuth(response.Data.jwtToken);
                window.location.href = '/';
            }
            else
                this.props.addAlert('Login gagal: '+response.Message, "danger");
            });
    }

    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="fromBasicEmail" sm={12} md={6}>
                    <Form.Label>Alamat Email</Form.Label>
                    <Form.Control onChange={this.onChange} name="email" type="email" placeholder="Masukan alamat email" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formBasicPassword" sm={12} md={6}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={ this.onChange } name="password" type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formBasicCheckbox" sm={12} md={6}>
                    <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default Login;
