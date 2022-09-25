import React from 'react';

export default function Card({name, max, min, onClose, img}) {
  // acá va tu código

  return (
    <div>
    <button onClick={onClose}>X</button>
    <h3>{name}</h3>
    <div>
       <p>Max</p>
       <p>{max}</p>
    </div>
    <div>
      <p>Min</p>
      <p>{min}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}  />

    </div>
    )
};