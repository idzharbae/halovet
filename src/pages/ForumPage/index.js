import React from 'react';
import './Forum_page.css';
import { Button, Form, Col, Alert, Card, Row, Container } from 'react-bootstrap';
import ensureArray from 'ensure-array';
import axios from 'axios';
import { getCookie } from '../../helper/cookies';

class ForumPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            topics: [],
            config: {
                validateStatus: function (status) {
                  return status >= 200 && status <= 302;
                },
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer '+ getCookie('jwt')
                }
              }
        }
    }

    componentDidMount(){
        axios.get('http://0.0.0.0:8000/forums?limitstart=0&limit=5', this.state.config)
            .then((result) => {
                const response = result.data;
                if(response.Status){
                console.log(response.Data.Forums);
                this.setState({
                    topics: response.Data.Forums
                })
                }
                else{
                console.log(response);
                }
            })
            .catch((e) => {
                if(e.response){
                console.log(e.response);
                if(e.response.data === "Token is expired\n")
                    this.props.addAlert("Session anda telah hangus silahkan login kembali.", "danger");
                    window.location.href="/logout";
                }
                
            })
            }

    render(){
        const {topics} = this.state;
        const renderTopics = [];
        ensureArray(topics).forEach((topic) => {
            renderTopics.push(
                <Card>
                    <Card.Header>{topic.Category.CategoryTitle}</Card.Header>
                    <Card.Body>
                        <Card.Title style={{color: '#0080ff'}}> <a href={"/forum/post/"+topic.TopicID.toString()}>{topic.Title}</a></Card.Title>
                        <Card.Text >{topic.Content}</Card.Text>
                        <Card.Text style={{float: 'right'}}>{topic.Author}</Card.Text>
                    </Card.Body>
                </Card>
            );
        })
        console.log(topics);
        console.log(this.state.topics);
       return(
        <>
            <Container>
            <Button style={{marginLeft:'990px'}}href="/forum" variant="secondary" type="submit">Tambah topic</Button>
            
            {renderTopics}
            </Container>
            <nav class="blog-pagination justify-content-center d-flex">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a href="#" class="page-link" aria-label="Previous">
                                        <i class="ti-angle-left"></i>
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">1</a>
                                </li>
                                <li class="page-item active">
                                    <a href="#" class="page-link">2</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link" aria-label="Next">
                                        <i class="ti-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
             </nav>
        </>
            );
        }
    }

export default ForumPage;