import React, { Component } from 'react';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name = '',
      date = '',
      time = '',
      number = ''
    }
  }

  render() {
    return (
      <form>
        <input
        type='text'
        />
        <input
        type='text'
        />
        <input
        type='text'
        />
        <input
        type='number'
        />
        <button>MAKE RESERVATION</button>
      </form>
    )
  }
}
