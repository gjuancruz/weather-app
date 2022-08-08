import React from "react"
import SearchBar from "./SearchBar.jsx"
import { Link } from 'react-router-dom';

export default function Nav({onSearch}){
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
            <Link to='/'>
  <a className="navbar-brand" href="https://www.soyhenry.com/">
    <img src='https://bookface-images.s3.amazonaws.com/small_logos/d4face92a7abc37a414e0bc3acf4ff23ec588438.png' width="30" height="30" className="d-inline-block align-top" alt=""/>
    Henry Weather APP
  </a>
  </Link>
  <Link to='/about'>
        <span>About</span>
      </Link>
    <SearchBar onSearch = {onSearch} />
</nav>
        </div>
    )
}