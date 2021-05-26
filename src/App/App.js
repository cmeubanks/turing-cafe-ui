import React, { Component } from 'react';
import './App.css';
import Reservations from './Reservations.js';
import Form from './Form.js';
import apiCalls from './api.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    apiCalls.getReservations()
    .then(data => {
      this.setState({ reservations: data })
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
