import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'

const Experience = () => {
  const handleMouseOver = () => {
    document.querySelector('.edit-experience').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-experience').style.display = 'none'
  }
  return (
    <div className='experience-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <IconButton aria-label="edit" color="secondary">
        <EditIcon on className='edit-experience' />
      </IconButton>

      <p className='section-title'>EXPERIENCE</p>
      <hr></hr>
      <h3>HSE Technical Professional</h3>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '5px' }} >
        <h4>Halliburton</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='small' color='action' /><p>10/2019 - 10/2020</p>
          <LocationOnIcon fontSize='small' color='action' /><p>Neuquen, Argentina</p>
        </div>
      </div>

      <h3>HSE & Security Coordinator</h3>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '5px' }} >
        <h4>TechnipFMC</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='small' color='action' /><p>07/2017 - 10/2019</p>
          <LocationOnIcon fontSize='small' color='action' /><p>Mendoza, Argentina</p>
        </div>
      </div>

      <h3>Safety Coordinator</h3>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '5px' }} >
        <h4>Tecna</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='small' color='action' /><p>10/2013 - 07/2017</p>
          <LocationOnIcon fontSize='small' color='action' /><p>Tierra del Fuego, BsAs, Neuquen, Argentina</p>
        </div>
      </div>

      <h3>Safety Coordinator</h3>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '5px' }} >
        <h4>Andrade Gutierrez</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='small' color='action' /><p>05/2011 - 03/2012</p>
          <LocationOnIcon fontSize='small' color='action' /><p>BsAs, Argentina</p>
        </div>
      </div>

      <h3>QHSE Analyst</h3>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '5px' }} >
        <h4>Champion Tech</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='small' color='action' /><p>01/2008 - 02/2011</p>
          <LocationOnIcon fontSize='small' color='action' /><p>Neuquen, Chubut, Argentina</p>
        </div>
      </div>

      <h3>Safety Supervisor</h3>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '5px' }} >
        <h4>Skanska</h4>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 'small' }} >
          <EventIcon fontSize='small' color='action' /><p>10/2005 - 05/2007</p>
          <LocationOnIcon fontSize='small' color='action' /><p>Neuquen, Rio Negro, La Pampa, Argentina</p>
        </div>
      </div>

    </div>
  )
}

export default Experience