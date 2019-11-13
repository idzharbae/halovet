import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Button, Col, Alert ,Container, Form, InputGroup } from 'react-bootstrap';
import './index.css';

class Home extends Component{
  state = {
    search: '',
    pokemon: null,
    loading: false
  }

  bindField = () => ({
    value: this.state.search,
    onChange: (e) => this.setState({ search: e.target.value })
  })

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchPokemon(this.state.search)
  }

  async fetchPokemon(id) {
    this.setState({ loading: true })
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    this.setState({ pokemon: data, loading: false })
  }

  render(){
    const { pokemon, loading } = this.state
    const fetched = !loading && pokemon && pokemon.id
    const notFound = !loading && pokemon && !pokemon.id

    return(
    <div>
       <header class="masthead text-white text-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h1 class="mb-5">Selamat datang di halovet!</h1>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
        </div>
      </div>
    </div>
  </header>
<section class="features-icons bg-light text-center">
<div class="container">
  <div class="row">
    <div class="col-lg-4">
      <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
        <div class="features-icons-icon d-flex">
          <i class="icon-people m-auto text-primary"></i>
        </div>
        <h3>Booking Dokter</h3>
        <p class="lead mb-0">Booking dokter hewan di wilayah anda!</p>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
        <div class="features-icons-icon d-flex">
          <i class="icon-note m-auto text-primary"></i>
        </div>
        <h3>Artikel</h3>
        <p class="lead mb-0">Artikel kesehatan dan perawatan hewan peliharaan anda!</p>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="features-icons-item mx-auto mb-0 mb-lg-3">
        <div class="features-icons-icon d-flex">
          <i class="icon-support m-auto text-primary"></i>
        </div>
        <h3>Forum tanya-jawab</h3>
        <p class="lead mb-0">Tanya-jawab seputar hewan peliharaan anda!</p>
      </div>
    </div>
  </div>
</div>
</section>

  <section class="testimonials text-center bg-light">
    <div class="container">
      <h2 class="mb-5">What people are saying...</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
          <img class="img-fluid rounded-circle mb-3" src='./img/testimonials-3.jpg' alt="satu"/>
            <h5>Margaret E.</h5>
            <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
          <img class="img-fluid rounded-circle mb-3" src='./img/testimonials-3.jpg' alt="dua"/>
            <h5>Fred S.</h5>
            <p class="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
          <img class="img-fluid rounded-circle mb-3" src='./img/testimonials-3.jpg' alt="tiga"/>
            <h5>Sarah W.</h5>
            <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
  }
}

export default Home;
