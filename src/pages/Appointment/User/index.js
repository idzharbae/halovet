import React from 'react';
import PageTemplate from '../../page_template';
import axios from 'axios';
import queryString from 'query-string';
import View from './view';
import { getCookie } from '../../../helper/cookies';

class AppointmentUser extends PageTemplate{
    constructor(props){
        super(props);
        this.state = {
            doctor_name: '',
            pet_name: '',
            complaint: '',
            time: null,
            appointments: [],
            view: (<View
                submitForm = {this.submitForm}
                bindForm = {this.bindForm}
                formGroup = {this.formGroup}
                appointments = {[]}
                addAlert = {this.props.addAlert}
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
        axios.get('http://localhost:8000/appointment/user/'+getCookie('user_id')+"?limitstart=0&limit=5", this.state.config)
            .then((result) => {
                console.log(result);
                const responseData = result.data.Data;
                this.setState({
                    view: <View
                    submitForm = {this.submitForm}
                    bindForm = {this.bindForm}
                    formGroup = {this.formGroup}
                    appointments = {responseData.Appointments}
                    addAlert = {this.props.addAlert}
                  />
                });
            })
            .catch((e) =>{
                if(e.response)
                    console.log(e.response);
                else
                    console.log(e);
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

export default AppointmentUser;
