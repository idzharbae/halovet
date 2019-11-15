import React from 'react';
import PageTemplate from '../page_template';
import axios from 'axios';
import queryString from 'query-string';
import View from './view';

class Appointment extends PageTemplate{
    constructor(props){
        super(props);
        this.state = {
            view: (<View 
                submitForm = {this.submitForm}
                bindForm = {this.bindForm}
                formGroup = {this.formGroup}
            />)
        }
    }

    submitForm = (e) => {
        
    }

}

export default Appointment;