import React from "react";
import NavBar from '../NavBar/NavBar'
import Cards from '../Countries/Countries'
import './Home.css'

export default function Home() {
  return (
    <div className = 'homeContainer'>
      <div className = 'navBar'>
      <NavBar/>
     </div>
     <div className = 'cardCountry'>
      <Cards/>
     </div>
    </div>
  );
}