import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

const Courses = () => {
  const handleMouseOver = () => {
    document.querySelector('.edit-courses').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-courses').style.display = 'none'
  }
  return (
    <div className='courses-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <IconButton aria-label="edit" color="secondary">
        <EditIcon on className='edit-courses' />
      </IconButton>

      <p className='section-title'>COURSES</p>
      <hr></hr>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><CodeIcon fontSize='smaller' /><a href='https://freecodecamp.org/certification/pinoen/responsive-web-design' target={'_blank'} rel="noreferrer">Responsive Web Design - Free Code Camp</a></div>

      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><CodeIcon fontSize='smaller' /><a href='https://freecodecamp.org/certification/pinoen/javascript-algorithms-and-data-structures' target={'_blank'} rel="noreferrer">Javascript Algorithms and Data Structure - Free Code Camp</a></div>

      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><CodeIcon fontSize='smaller' /><a href='https://app.aluracursos.com/program/certificate/8728b851-4cbf-4d68-8047-1db4739f9004' target={'_blank'} rel="noreferrer">Oracle Next Education - Programming - Frontend - Java</a></div>

      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><CodeIcon fontSize='smaller' /><a href='https://app.aluracursos.com/degree/certificate/259f9371-76b8-4770-a014-daf9460d7e52' target={'_blank'} rel="noreferrer">SQL - Oracle Next Education</a></div>

      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><CodeIcon fontSize='smaller' /><a href='https://app.aluracursos.com/degree/certificate/2e58a20e-09fe-4f55-ad75-807b5bbb52b9' target={'_blank'} rel="noreferrer">Oracle Cloud - Oracle Next Education</a></div>

      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><CodeIcon fontSize='smaller' /><a href='https://app.aluracursos.com/degree/certificate/7910e942-5d32-4e02-97a9-3545b2d1b1a1' target={'_blank'} rel="noreferrer">Business Agility - Oracle Next Education</a></div>

    </div>
  )
}

export default Courses