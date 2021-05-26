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

  addRes = (newRes) => {
    apiCalls.postReservations(newRes)
    .then((resData) => {
      this.setState({ reservations: [...this.state.reservations, resData ]})
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <main>
            <Form addRes={this.addRes}/>
            <div className='resy-container'>
              <Reservations reservations={this.state.reservations}/>
            </div>
        </main>
      </div>
    )
  }
}

export default App;
