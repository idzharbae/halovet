import React from 'react';
import PageTemplate from '../page_template';
import axios from 'axios';
import queryString from 'query-string';
import View from './view';
import { getCookie } from '../../helper/cookies';

class Appointment extends PageTemplate{
    constructor(props){
        super(props);
        this.state = {
            view: (<View 
                submitForm = {this.submitForm}
                bindForm = {this.bindForm}
                formGroup = {this.formGroup}
            />),
            doctor_name: '',
            pet_name: '',
            complaint: '',
            time: null
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        const { doctor_name, pet_name, complaint, time } = this.state;
        const token = getCookie('jwt');
        let config = {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer '+token
            }
        };
        const data = queryString.stringify({ doctor_name, pet_name, complaint, time }).replace(/%20/g,'+');
        axios.post('http://0.0.0.0:8000/appointment', data, config)
            .then((result) => {
                console.log(result);
            })
            .catch((e) => {
                console.log(e.response);
            });
    }

}

export default Appointment;