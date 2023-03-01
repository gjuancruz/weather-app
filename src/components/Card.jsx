import React from 'react';
import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({ min, max, name, img, onClose, id }) {
  // acá va tu código
  return <div>

    <div className={`${style.nose}`}>
      <button onClick={onClose} className={style.btn} >X</button>
      <Link to={`/city/${id}`} >
        <h4 className={`${style.adad}`}>{name}</h4>
      </Link>
      <div className={style.columns}>
        <h3 >Min </h3>
        <h4>Max</h4>

      </div>
      <div className={style.columns2}>
        <p className={style.negrita}>{min}°</p>
        <p className={style.negrita}>{max}°</p>
      </div>
      {img.length?
      <img className={style.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      :
      <img className={style.img} src={`https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif`} alt="" />
    }
    </div>

  </div>
};