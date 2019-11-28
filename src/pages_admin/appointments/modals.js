import React from 'react';
import {Modal, Button, OverlayTrigger, Tooltip, Form, Col, Row} from 'react-bootstrap';
import queryString from 'query-string';
import axios from 'axios';
import { continueStatement } from '@babel/types';
import { getCookie } from '../../helper/cookies';

class Modals extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token : getCookie('jwt'),
            show : false,
            title: "",
            content: "",
            showEdit: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.showModalEdit = this.showModalEdit.bind(this);
        this.hideModalEdit = this.hideModalEdit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.bindForm = this.bindForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount(){
        const {appointment} = this.props;
        this.setState({
            title: appointment.Title,
            content: appointment.Content
        })
    }
    showModal(){
        this.setState({show: true});
    }
    hideModal(){
        this.setState({show: false})
    }
    onSubmit(){
        const config = {
            validateStatus: function (status) {
                return status >= 200 && status <= 302;
            },
            headers:{
                'Authorization': 'Bearer ' + this.state.token
            }
        }
        axios.delete("http://0.0.0.0:8000/admin/appointment/"+this.props.appointment.ID.toString(), config)
            .then((result) => {
                const response = result.data;
                console.log(response);
                if(response.Status){
                    this.hideModal();
                    this.props.modalCloseEvent();
                }
            })
            .catch((e) => {
                if (e.response)
                    console.log(e.response);
            });
    }
    showModalEdit(){
        this.setState({showEdit: true});
    }
    hideModalEdit(){
        this.setState({showEdit: false})
    }
    onSubmitEdit(){
        const token = getCookie('jwt');
        console.log("validate");
        console.log(this.props);
        const config = {
            validateStatus: function (status) {
                return status >= 200 && status <= 302;
            },
            headers:{
                'Authorization': 'Bearer ' + token
            }
        }
        axios.put("http://0.0.0.0:8000/admin/appointment/"+this.props.appointment.AppointmentID.toString()+"/validatePayment",{}, config)
            .then((result) => {
                const response = result.data;
                this.hideModal();
                this.props.modalCloseEvent();
            })
            .catch((e) => {
              console.log("validate");
                if (e.response)
                    console.log(e.response);
            });
    }
    submitForm = (e) => {
        const {appointment} = this.props;
        const config = {
            validateStatus: function (status) {
                return status >= 200 && status <= 302;
            },
            headers:{
                'Authorization': 'Bearer ' + getCookie('jwt')
            }
        }
        axios.delete("http://0.0.0.0:8000/appointment/"+this.props.appointment.AppointmentID.toString(), config)
            .then((result) => {
                const response = result.data;
                this.props.modalDeleteEvent();
            })
            .catch((e) => {
                if(e.response)
                    console.log(e.response);
            });
    }

    bindForm = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render(){
        const {show, showEdit} = this.state;
        const {appointment} = this.props;
        const pembayaran = appointment.IsPaid?<></>:<><OverlayTrigger
            key={appointment.ID}
            placement="top"
            overlay={
                <Tooltip>
                Validasi Pembayaran
                </Tooltip>
            }
        >
        <a href="#!" onClick={this.showModalEdit}><i class="fas fa-check"></i></a>
        </OverlayTrigger>
        <Modal show={showEdit} onHide={this.hideModalEdit} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Edit "{appointment.Title}"</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Validasi pembayaran {appointment.Pet_Owner_Name}?
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModalEdit}>
                Batal
            </Button>
            <Button variant="primary" onClick={this.onSubmitEdit.bind(this)} >
                Validasi
            </Button>
            </Modal.Footer>
        </Modal></>;
        return (
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <OverlayTrigger
                key={appointment.ID}
                placement="top"
                overlay={
                    <Tooltip>
                    Hapus appointment
                    </Tooltip>
                }
            >
            <a href="#!" onClick={this.showModal}><i className="fas fa-trash-alt" style={{color: "red"}}></i></a>
            </OverlayTrigger>
            <Modal show={show} onHide={this.hideModal} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Konfirmasi Hapus</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hapus appointment milik {appointment.Pet_Owner_Name} ?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.hideModal}>
                    Close
                </Button>
                <Button variant="danger" onClick={this.submitForm} >
                    Hapus
                </Button>
                </Modal.Footer>
            </Modal>
            {pembayaran}
            </div>
        );
    }
}

export default Modals;
