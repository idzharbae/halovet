import React from 'react';
import { Card, Tabs, Tab, Table, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import { getCookie } from '../../helper/cookies';
import queryString from 'query-string';
import ensureArray from 'ensure-array';
import Modals from './modals';


class Appointments extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
            token: getCookie('jwt'),
            data: [
            ]
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        const config = {
            validateStatus: function (status) {
                return status >= 200 && status <= 302;
            },
            headers:{
                'Authorization': 'Bearer ' + this.state.token
            }
        }
        axios.get("http://0.0.0.0:8000/admin/appointment?limit=5&limitstart=0", config)
            .then((result) => {
                const response = result.data;
                console.log(response);
                if(response.Status)
                    this.setState({
                        data : response.Data.Appointments
                    });
            })
            .catch((e) => {
                if(e.response){
                    if(e.response.data === "Token is expired\n"){
                        this.props.addAlert("Token expired, silahkan logout dan login kembali." , "danger");
                        window.location.href="/logout";
                    }else{
                        console.log(e.response);
                    }
                }
            });
        axios.get("http://0.0.0.0:8000/admin/appointment?limit=5&limitstart=0", config)
            .then((result) => {
                const response = result.data;
                console.log(response);
                if(response.Status)
                    this.setState({
                        data : response.Data.Appointments
                    });
            })
            .catch((e) => {
                if(e.response){
                    if(e.response.data === "Token is expired\n"){
                        this.props.addAlert("Token expired, silahkan logout dan login kembali." , "danger");
                        window.location.href="/logout";
                    }else{
                        console.log(e.response);
                    }
                }
            });
    }
    submitForm = (e) => {
        console.log(this.state.token);
        e.preventDefault();
        const config = {
            validateStatus: function (status) {
                return status >= 200 && status <= 302;
            },
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.state.token
            }
        }
        const {title, content} = this.state;
        const data = queryString.stringify({ title, content }).replace(/%20/g,'+');
        axios.post("http://0.0.0.0:8000/admin/article",data, config)
            .then((result) => {
                const response = result.data;
                console.log("posting alert.");
                this.props.addAlert("Berhasil menambah artikel", "success");
                this.getData();
            })
            .catch((e) => {
                if(e.response)
                    console.log(e.response);
            });
        this.getData();
    }

    bindForm = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    modalCloseEvent(){
        this.props.addAlert("Berhasil validasi pembayaran.", "success");
        this.getData();
    }
    modalDeleteEvent(){
        this.props.addAlert("Berhasil menghapus appointment.", "success");
        this.getData();
    }

    renderGetTable(){
        const {data} = this.state;
        const dataRender = [];
        ensureArray(data).forEach((x) => {
            dataRender.push(
                <tr>
                    <td>{x.AppointmentID}</td>
                    <td>{x.Pet_Owner_Name}</td>
                    <td>{x.Doctor_name}</td>
                    <td>{x.Complaint}</td>
                    <td>{(x.IsPaid)?"Lunas":"Belum Lunas"}</td>
                    <td><img src={"http://0.0.0.0:8000/static/payment/"+x.PhotoPath} style={{maxWidth: "300px"}} /></td>
                    <td>
                        <Modals appointment={x} modalCloseEvent={this.modalCloseEvent.bind(this)} modalDeleteEvent={this.modalDeleteEvent.bind(this)}/>
                    </td>
                </tr>
            )
        })
        return(
            <Card>
                        <Card.Body>
                            <Table>
        <thead>
        <tr>
        <th>ID</th>
        <th>Owner</th>
        <th>Dokter</th>
        <th>Keluhan</th>
        <th>Pembayaran</th>
        <th>Bukti Pembayaran</th>
        <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {dataRender}
    </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
        );
    }
    render(){
        return(
            <Tabs defaultActiveKey="getAppointments" id="ArticleTabs">
                <Tab eventKey="getAppointments" title="Appointment">
                    {this.renderGetTable()}
                </Tab>
            </Tabs>
        );
    }
}

export default Appointments;
