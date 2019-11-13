import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a><br/>
        <Button variant="danger">
            <a href="/test" style={{color: "white"}}>
            Go to test
            </a>
        </Button>
        <Container>
          <Form className="search-bar" onSubmit={this.handleSubmit}>
            <Form.Control {...this.bindField() } type="number" />{' '}
            <Button onClick={this.handleSubmit}>Fetch Pokemon by ID</Button>
          </Form>

          {loading && (
            <div>Loading...</div>
          )}

          {fetched && (
            <div>
              <div><small>[{pokemon.id}]</small> <strong>{pokemon.name}</strong></div>
              <div><img src={pokemon.sprites.back_default} /> <img src={pokemon.sprites.front_default} /></div>
            </div>
          )}

          {notFound && (
            <div>Did not find this pokemon</div>
          )}
        </Container>
      </header>
    );
  }
}

export default Home;
