import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import About from './components/About.jsx';
import City from './components/City.jsx'
import { Route } from 'react-router-dom';

export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = '0a52c83f44985ce5e9183dc6ac94a7c1'

  function onSearch(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }
 function onClose(id){
  setCities(oldCities => oldCities.filter(c=>c.id !== id))
 }
  function onFilter(cityId) {
    let ciudad = cities.filter(c => c.id === parseInt(cityId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
 
  return (
    <div className="App">
      <Route
      path= '/'
      render={()=><Nav onSearch={onSearch}/>}
      />
      <Route
    exact path='/about'
    component={About}
/>
<Route
exact path='/'
 render={()=><Cards cities={cities} onClose = {onClose} />}
 />
 <Route
    exact
    path='/city/:cityId'
    render={({match}) => <City
          city={onFilter(match.params.cityId)}
        />}
  />
 </div>
  );
  }

