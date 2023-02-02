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
      <h3>Certified Tech Developer</h3>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '15px' }} >
        <a href='https://www.digitalhouse.com/ar' target={'_blank'} rel="noreferrer">Digital House</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='small' color='action' /><p>05/2022 - Ongoing</p>
          <LocationOnIcon fontSize='small' color='action' /><p>Online, Argentina</p>
        </div>
      </div>

      <h3>Degree in Health and Safety at Work</h3>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between' }} >
        <a href='https://www.uda.edu.ar/' target={'_blank'} rel="noreferrer">Universidad del Aconcagua</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='small' color='action' /><p>03/2003 - 11/2010</p>
          <LocationOnIcon fontSize='small' color='action' /><p>Mendoza, Argentina</p>
        </div>
      </div>


    </div>
  )
}

export default Education