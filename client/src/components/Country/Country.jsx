import React from "react"
import './Country.css'

export default function Card({name, flag, continent, capital, population, id}) {
  return (
  <div className='countryCC'>
      <h3>{name}</h3>
      <img className= 'flag-image'src={flag} alt='Imagen no encontrada'/>
      <div className='infoCC'>
      <h5 className='content'>Capital: {capital}</h5>
      <h5 className='content'>Continent: {continent}</h5>
      <h5 className='content'>Population: {population}</h5>
      </div>
  </div>
  )

};