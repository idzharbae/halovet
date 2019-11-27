import React from 'react';
import { Card, Tabs, Tab, Table, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import { getCookie } from '../../helper/cookies';
import queryString from 'query-string';
import ensureArray from 'ensure-array';
import Modals from './modals';


class Posts extends React.Component {
    
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
        axios.get("http://0.0.0.0:8000/articles?limit=5&limitstart=0", config)
            .then((result) => {
                const response = result.data;
                console.log(response);
                if(response.Status)
                    this.setState({
                        data : response.Data.Articles
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
            })
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
        const data = new FormData(e.target);
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
        this.props.addAlert("Berhasil menghapus artikel.", "success");
        this.getData();
    }
    modalEditEvent(){
        this.props.addAlert("Berhasil mengupdate artikel.", "success");
        this.getData();
    }

    renderGetTable(){
        const {data} = this.state;
        const dataRender = [];
        ensureArray(data).forEach((x) => {
            dataRender.push(
                <tr>
                    <td>{x.ID}</td>
                    <td>{x.Title}</td>
                    <td>{x.Author}</td>
                    <td>{x.Content}</td>
                    <td><img style={{maxWidth: "300px"}} src={"http://0.0.0.0:8000/static/article/"+x.PhotoPath} /></td>
                    <td>
                        <Modals article={x} modalCloseEvent={this.modalCloseEvent.bind(this)} modalEditEvent={this.modalEditEvent.bind(this)}/>
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
                            <th>Title</th>
                            <th>Author</th>
                            <th>Content</th>
                            <th>Gambar</th>
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

    renderPostTable(){
        return(
            <Card>
                <Card.Body>
                    <Card.Title>Buat Artikel Baru</Card.Title>
                    <Form style={{padding: "0px"}} onSubmit={this.submitForm}>
                        <Form.Row>
                            <Form.Group as={Col} sm={12} md={6}>
                            <Form.Label>Judul Artikel</Form.Label>
                            <Form.Control name="title" type="text" placeholder="Judul Artikel"/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} sm={12} md={6}>
                            <Form.Label>Konten</Form.Label>
                            <Form.Control as="textarea" name="content">
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} sm={12} md={6}>
                            <Form.Label>Gambar</Form.Label>
                            <Form.Control type="file" name="photo">
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
    render(){
        return(
            <Tabs defaultActiveKey="getTable" id="ArticleTabs">
                <Tab eventKey="getTable" title="Artikel">
                    {this.renderGetTable()}
                </Tab>
                <Tab eventKey="postTable" title="Buat Artikel">
                    {this.renderPostTable()}
                </Tab>
            </Tabs>    
        );
    }
}

export default Posts;