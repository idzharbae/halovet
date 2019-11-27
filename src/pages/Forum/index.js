import './Forum.css';
import PageTemplate from '../page_template';
import axios from 'axios';
import queryString from 'query-string';
import { getCookie } from '../../helper/cookies';
import React from 'react';
import View from './view';
import { tsImportEqualsDeclaration } from '@babel/types';
import { Redirect } from 'react-router-dom';

class Forum extends PageTemplate{
  constructor(props){
    super(props);
    this.state = { 
      title: '',
      category: 'penyakit kulit',
      content: '',
      view: <View 
            submitForm = {this.submitForm}
            formGroup = {this.formGroup}
            bindForm = {this.bindForm}
            formSelection = {this.formSelection}
            topics = {[]}
          />,
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
    axios.get('http://0.0.0.0:8000/forums?limitstart=0&limit=5', this.state.config)
      .then((result) => {
        const response = result.data;
        if(response.Status){
          console.log(response);
          this.setState({
            view: <View 
            submitForm = {this.submitForm}
            formGroup = {this.formGroup}
            bindForm = {this.bindForm}
            formSelection = {this.formSelection}
            topics = {response.Data.Forums}
          />
          })
        }
        else{
          // console.log(result);
        }
      })
      .catch((e) => {
        if(e.response){
          console.log(e.response);
          if(e.response.data === "Token is expired\n")
            this.props.addAlert("Session anda telah hangus silahkan login kembali.", "danger");
            this.setState({
              view: <Redirect to="/logout" />
            })
        }
          
      })
  }
  submitForm = (e) => {
    e.preventDefault()
    const { title, category, content } = this.state;
    const data = queryString.stringify({ title, category, content }).replace(/%20/g,'+');
    console.log(data);
    axios.post('http://0.0.0.0:8000/forum', data, this.state.config)
        .then((result) => {
        const response = result.data;
        console.log(response.Status);
        if(response.Status){
          console.log(response);
          console.log('response');
          this.props.addAlert('Berhasil menambah post', "success");
        }
        else{
            this.props.addAlert('Post gagal: '+response.Message, "danger");
            console.log(response);
          }
        }).catch((e) => {
          if(e.response)
            console.log(e.response);
        });
  }

}
export default Forum;