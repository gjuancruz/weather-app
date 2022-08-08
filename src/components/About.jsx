import React from "react";
import styles from "./About.module.css"
export default function About(){
    return(
    <div>
        <h2>¿Qué es Henry Weather App?</h2>
        <h5 className={styles.container}>Henry Weather App es una aplicación creada por mí en el bootcamp Henry,
        a través de la cual se puede obtener información acerca del clima de cualquier ciudad ingresada en la barra
        de búsqueda. La misma consume datos de la API de Open Weather Map y renderiza componentes React.
        Todos los estilos fueron realizados con CSS Puro
        </h5>
        <br/>
        <h3>Contáctame</h3>
        <p>
        📞: +5493875039513<br/>
📧: juancrgalaz@gmail.com<br/>
🐱‍💻: https://github.com/gjuancruz <br/>
        </p>
    </div>
    )
}