import React, {useState} from 'react';
import style from './SearchBar.module.css'
export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('')
  return (
    <form  onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    } } >
      <div className={style.container}>
      <input className={style.sb}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar"  className={style.btn}/>
    </div>
    </form>
  );
}