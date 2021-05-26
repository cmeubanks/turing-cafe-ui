import React from 'react';

const Card = ({id, name, date, time, number}) => {
  return (
    <div id={id}>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{`Number of guests: ${number}`}</p>
      <button>Cancel</button>
    </div>
  )
}
