import React from 'react';
import Card from './Card.js';

const Reservations = ({reservations}) => {
  const reservationsBooked = reservations.map(reservation => {
    return (
      <Card />
    )
  })

  return (
    <React.Fragment>
    </React.Fragment>
  )
}

export default Reservations;
