import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useState } from 'react'
import AddExperience from './modals/AddExperience';

const Experience = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
        <EditIcon on className='edit-experience' />
      </IconButton>

      <p className='section-title'>EXPERIENCE</p>
      <hr></hr>
      <h4 className='experience-title'>HSE Technical Professional</h4>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '5px' }} >
        <a href='https://www.halliburton.com/' target={'_blank'} rel="noreferrer">Halliburton</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='smaller' color='action' /><p>10/2019 - 10/2020</p>
          <LocationOnIcon fontSize='smaller' color='action' /><p>Neuquen, Argentina</p>
        </div>
      </div>

      <h4 className='experience-title'>HSE & Security Coordinator</h4>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '5px' }} >
        <a href="https://www.technipfmc.com/" target="_blank" rel="noreferrer">TechnipFMC</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='smaller' color='action' /><p>07/2017 - 10/2019</p>
          <LocationOnIcon fontSize='smaller' color='action' /><p>Neuquen, Argentina</p>
        </div>
      </div>

      <h4 className='experience-title'>Safety Coordinator</h4>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '5px' }} >
        <a href="https://tecna.business.site/" target="_blank" rel="noreferrer">Tecna</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='smaller' color='action' /><p>10/2013 - 07/2017</p>
          <LocationOnIcon fontSize='smaller' color='action' /><p>Tierra del Fuego, BsAs, Neuquen, Argentina</p>
        </div>
      </div>

      <h4 className='experience-title'>Safety Coordinator</h4>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between', marginBottom: '5px' }} >
        <a href="https://www.andradegutierrez.com.br/" target="_blank" rel="noreferrer">Andrade Gutierrez</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'small' }} >
          <EventIcon fontSize='smaller' color='action' /><p>05/2011 - 03/2012</p>
          <LocationOnIcon fontSize='smaller' color='action' /><p>BsAs, Argentina</p>
        </div>
      </div>

      <h4 className='experience-title'>QHSE Analyst</h4>
      <div className='experience-style' >
        <a href="https://www.championx.com/" target="_blank" rel="noreferrer">Champion Technologies</a>
        <div className='experience-style-icons' >
          <EventIcon fontSize='smaller' color='action' /><p>01/2008 - 02/2011</p>
          <LocationOnIcon fontSize='smaller' color='action' /><p>Neuquen, Chubut, Argentina</p>
        </div>
      </div>

      <AddExperience open={open} handleClose={handleClose} />

    </div>
  )
}

export default Experience