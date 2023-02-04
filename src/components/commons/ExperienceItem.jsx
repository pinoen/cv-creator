import React from 'react'
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ExperienceItem = ({ role, company, web, from, until, place }) => {
  return (
    <>
      <h4 className='experience-title'>{role}</h4>
      <div className='experience-style' >
        <a href={web} target="_blank" rel="noreferrer">{company}</a>
        <div className='experience-style-icons' >
          <EventIcon fontSize='smaller' color='action' /><p>{from} - {until}</p>
          <LocationOnIcon fontSize='smaller' color='action' /><p>{place}</p>
        </div>
      </div>
    </>
  )
}

export default ExperienceItem