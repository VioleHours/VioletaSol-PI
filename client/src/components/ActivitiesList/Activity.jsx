import React from 'react'
import './ActivitiesList'

export default function Activity({ name, duration, season, difficulty, countryId }) {
  return (
    <div className='divActivityContainer'>
      <h2 className='h2Activity'>{name}</h2>
      <h3 className='h3Activity'>Duration: {duration}</h3>
      <h3 className='h3Activity'>Season: {season}</h3>
      <h3 className='h3Activity'>Difficulty: {difficulty}</h3>
      <h3>{countryId}</h3>
    </div>
  );
}