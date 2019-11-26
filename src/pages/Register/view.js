import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './Register.css';

const View = (props) => {
    if(props.redirect){
        console.log(props.redirect);
        console.log('^redirect');
        return <Redirect to={props.redirect} />;
    }
    return(
        <Form onSubmit={props.submitForm}>
            {props.formGroup({
                label: 'Nama Lengkap',
                name: 'name',
                type: 'text',
                placeholder: 'Masukan nama lengkap',
                onchange: props.bindForm
            })}
            {props.formGroup({
                label: 'Email',
                name: 'email',
                type: 'email',
                placeholder: 'Masukan alamat email',
                onchange: props.bindForm
            })}
            {props.formGroup({
                label: 'Password',
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                onchange: props.bindForm
            })}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default View;