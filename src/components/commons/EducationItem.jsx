import React from 'react'
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const EducationItem = ({ career, institution, web, from, until, place }) => {
  return (
    <>
      <h3>{career}</h3>
      <div className='education-style'>
        <a href={web} target={'_blank'} rel="noreferrer">{institution}</a>
        <div className='education-style-icons' >
          <EventIcon fontSize='small' color='action' /><p>{from} - {until}</p>
          <LocationOnIcon fontSize='small' color='action' /><p>{place}</p>
        </div>
      </div>
    </>
  )
}

export default EducationItem