import React from 'react';
import s from './Card.module.css'

export default function Card({name, max, min, onClose, img}) {
  // acá va tu código
  return (
    <div className={s.contenedor}>
    <div>
    <button className={s.botonClose} onClick={onClose}>X</button>
    </div>
    <div className={s.data}>
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
    </div>
    )

};