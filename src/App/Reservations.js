import React from 'react';
import Card from './Card.js';

const Reservations = ({reservations}) => {
  const reservationsBooked = reservations.map(reservation => {
    return (
      <Card
        name={reservation.name}
        amount={reservation.amount}
        id={reservation.id}
        key={reservation.id}
      />
    )
  })

  return (
    <React.Fragment>
      {reservationsBooked}
    </React.Fragment>
  )
}

export default Reservations;
