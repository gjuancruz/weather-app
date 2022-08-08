import React from 'react';
import Card from './Card';
import style from './Cards.module.css'
export default function Cards({cities, onClose}) {
    return (
      <div>
        {
        cities && <div className={style.container}>
         {cities.map(c => {return(<Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            />) })}
      </div>
      }
      {!cities.length && 
      <div>
      <h1>Bienvenido a Henry Weather App!</h1>
      <h4>Añade ciudades desde la barra de búsqueda para ver su información</h4>
      <p>Puedes probar con: Londres</p>
      </div>
      }
      </div>
    );
  } 
  // else {
  //   return(
  //     <p>Sin ciudades</p>
  //   )
  // }
// }