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
            doctor_name: 'dr Mahfouz',
            pet_name: '',
            complaint: '',
            time: null,
            appointments: [],
            view: (<View
                submitForm = {this.submitForm}
                bindForm = {this.bindForm}
                formGroup = {this.formGroup}
                formSelection = {this.formSelection}
                appointments = {[]}
            />),
            config: {
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer '+getCookie('jwt')
                }
            }
        }
    }
    componentDidMount(){
        console.log("PROPS");
        console.log(this.props);
        axios.get('http://localhost:8000/'+getCookie('user_id')+'/appointment', this.state.config)
            .then((result) => {
                const responseData = result.data.Data;
                this.setState({
                    appointments: responseData.Appointments,
                    view: (<View
                        submitForm = {this.submitForm}
                        bindForm = {this.bindForm}
                        formGroup = {this.formGroup}
                        formSelection=  {this.formSelection}
                        appointments = {responseData.Appointments}
                    />)
                });
                // console.log(this.state.appointments);
            })
            .catch((e) =>{
                if(e.response)
                    console.log(e.response);
            });
    }

    submitForm = (e) => {
        e.preventDefault()
        const { doctor_name, pet_name, complaint, time } = this.state;
        const data = queryString.stringify({ doctor_name, pet_name, complaint, time }).replace(/%20/g,'+');
        axios.post('http://0.0.0.0:8000/appointment', data, this.state.config)
            .then((result) => {
                const response = result.data;

                if(response.Status === true){
                    console.log(response);
                    this.props.addAlert('Booking berhasil.', "success");
                }
                else
                    this.props.addAlert('Booking gagal: '+response.Message, "danger");
            })
            .catch((e) => {
                if(e.response)
                    this.props.addAlert('Booking gagal: '+e.response.Message, "danger");
            });
    }

}

export default Appointment;
