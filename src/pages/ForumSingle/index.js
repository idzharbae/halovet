import PageTemplate from '../page_template';
import axios from 'axios';
import queryString from 'query-string';
import { getCookie } from '../../helper/cookies';
import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';
import { useParams } from 'react-router-dom';
import { Row, Container, Card } from 'react-bootstrap';

class Forum extends PageTemplate{
  constructor(props){
    super(props);
    this.state = { 
      title: '',
      category: '',
      content: '',
      author: '',
      config: {
        validateStatus: function (status) {
          return status >= 200 && status <= 302;
        },
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer '+ getCookie('jwt')
        }
      }
    };
  }
  componentDidMount(){
      const { config } = this.state;
      const { postId } = this.props;
      axios.get("http://0.0.0.0:8000/forum/"+postId.toString(), config)
        .then((result) => {
            const response = result.data;
            if(response.Status)
            this.setState({
                title: response.Data.ForumTopic[0].Title,
                content: response.Data.ForumTopic[0].Content,
                author: response.Data.ForumTopic[0].Author,
            });
            
        })
        .catch((e) => {
            if(e.response)
                console.log(e.response);
        })
  }
  render(){
      const { title, content, author } = this.state;

      return(
          <Container style={{marginTop: "15px", marginBottom: "15px"}}>
              <Card style={{border:"none"}}>
                <Card.Body>
                    <h1>{ title }</h1>
                    <Card.Footer style={{backgroundColor: "white"}}>
                        <small>{ author }</small>
                    </Card.Footer>
                    <Card.Footer>
                        test
                    </Card.Footer>
                </Card.Body>
              </Card>
          </Container>
      )
  }

}

export default Forum;