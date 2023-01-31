import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import React from 'react'

const Education = () => {
  const handleMouseOver = () => {
    document.querySelector('.edit-education').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-education').style.display = 'none'
  }
  return (
    <div className='education-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <IconButton aria-label="edit" color="secondary">
        <EditIcon on className='edit-education' />
      </IconButton>

      <p className='section-title'>EDUCATION</p>
      <hr></hr>
      <h2>Certified Tech Developer</h2>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '15px' }} >
        <h4>Digital House</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='small' color='action' /><p>05/2022 - Ongoing</p>
          <LocationOnIcon fontSize='small' color='action' /><p>Online, Argentina</p>
        </div>
      </div>

      <h2>Degree in Health and Safety at Work</h2>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between' }} >
        <h4>Universidad del Aconcagua</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='small' color='action' /><p>03/2003 - 11/2010</p>
          <LocationOnIcon fontSize='small' color='action' /><p>Mendoza, Argentina</p>
        </div>
      </div>


    </div>
  )
}

export default Education