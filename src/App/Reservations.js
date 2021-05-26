import React from 'react';

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
