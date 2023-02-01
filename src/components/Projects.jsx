import React from 'react'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const handleMouseOver = () => {
    document.querySelector('.edit-projects').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-projects').style.display = 'none'
  }
  return (
    <div className='projects-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <IconButton aria-label="edit" color="secondary">
        <EditIcon on className='edit-projects' />
      </IconButton>

      <p className='section-title'>PROJECTS</p>
      <hr></hr>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><LaunchIcon fontSize='smaller' /><a href='https://frontend-final-dentist-cards.netlify.app/home'>DH Odonto - Frontend Final</a></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><LaunchIcon fontSize='smaller' /><a href='https://github-cards-f41c2c.netlify.app/'>GitHub Users' Cards - Frontend</a></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><LaunchIcon fontSize='smaller' /><a href='https://github.com/pinoen/proyecto-integrador'>Clinica Odontologica - Backend</a></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><LaunchIcon fontSize='smaller' /><a href='https://github.com/pinoen/hotel'>Hotel - Java - Oracle</a></div>

    </div>
  )
}

export default Projects