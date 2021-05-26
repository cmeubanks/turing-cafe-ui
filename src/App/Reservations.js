import React from 'react';
import Card from './Card.js';

const Reservations = ({reservations}) => {
  const reservationsBooked = reservations.map(reservation => {
    return (
      <Card
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
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
