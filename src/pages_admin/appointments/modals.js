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
        const {article} = this.props;
        this.setState({
            title: article.Title,
            content: article.Content
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
        axios.delete("http://0.0.0.0:8000/admin/article/"+this.props.article.ID.toString(), config)
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
        const config = {
            validateStatus: function (status) {
                return status >= 200 && status <= 302;
            },
            headers:{
                'Authorization': 'Bearer ' + this.state.token
            }
        }
        axios.delete("http://0.0.0.0:8000/admin/article/"+this.props.article.ID.toString(), config)
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
    submitForm = (e) => {
        console.log(this.state.token);
        e.preventDefault();
        const {article} = this.props;
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
        axios.put("http://0.0.0.0:8000/admin/article/"+article.ID.toString(),data, config)
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
        this.props.modalEditEvent();
    }

    bindForm = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render(){
        const {show, showEdit} = this.state;
        const {article} = this.props;
        return (
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <OverlayTrigger
                key={article.ID}
                placement="top"
                overlay={
                    <Tooltip>
                    Hapus artikel
                    </Tooltip>
                }
            >
            <a href="#!" onClick={this.showModal}><i className="fas fa-trash-alt" style={{color: "red"}}></i></a>
            </OverlayTrigger>
            <Modal show={show} onHide={this.hideModal} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Konfirmasi Hapus</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hapus artikel "{article.Title}" ?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.hideModal}>
                    Close
                </Button>
                <Button variant="danger" onClick={this.onSubmit} >
                    Hapus
                </Button>
                </Modal.Footer>
            </Modal>
            <OverlayTrigger
                key={article.ID}
                placement="top"
                overlay={
                    <Tooltip>
                    Edit artikel
                    </Tooltip>
                }
            >
            <a href="#!" onClick={this.showModalEdit}><i className="fas fa-edit"></i></a>
            </OverlayTrigger>
            <Modal show={showEdit} onHide={this.hideModalEdit} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Edit "{article.Title}"</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={{padding: "0px"}} onSubmit={this.submitForm}>
                        <Form.Row>
                            <Form.Group as={Col} sm={12} md={6}>
                            <Form.Label>Judul Artikel</Form.Label>
                            <Form.Control onChange={this.bindForm} name="title" type="text" placeholder="Judul Artikel" value={this.state.title}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} sm={12} md={6}>
                            <Form.Label>Konten</Form.Label>
                            <Form.Control as="textarea" onChange={this.bindForm} name="content">
                                {article.Content}
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.hideModalEdit}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.submitForm} >
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
}

export default Modals;