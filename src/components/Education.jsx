import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddEducation from './modals/AddEducation';


import React, { useState } from 'react'

const Education = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
        <EditIcon on className='edit-education' />
      </IconButton>

      <p className='section-title'>EDUCATION</p>
      <hr></hr>
      <h3>Certified Tech Developer</h3>
      <div className='education-style'>
        <a href='https://www.digitalhouse.com/ar' target={'_blank'} rel="noreferrer">Digital House</a>
        <div className='education-style-icons' >
          <EventIcon fontSize='small' color='action' /><p>05/2022 - Ongoing</p>
          <LocationOnIcon fontSize='small' color='action' /><p>Online, Argentina</p>
        </div>
      </div>

      <AddEducation open={open} handleClose={handleClose} />
    </div>
  )
}

export default Education