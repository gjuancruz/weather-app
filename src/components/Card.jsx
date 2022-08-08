import React from 'react';
import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({min, max, name, img, onClose, id}) {
  // acá va tu código
  return <div>
    
      <div className={`${style.nose}`}>
        <button onClick={onClose} className={style.btn} >X</button>
        <Link to={`/city/${id}`} >
        <h4  className={`${style.adad}`}>{name}</h4>
        </Link>
        <div className={style.columns}>
         <p className={style.negrita}>Min (°C) </p>
         <p>{min}</p>
         <p className={style.negrita}>Max (°C)</p>
         <p>{max}</p>
         </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        </div>
         
        </div>
};