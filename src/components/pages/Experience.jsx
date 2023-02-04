import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useState } from 'react'
import AddExperience from '../modals/AddExperience';
import { ExperienceContext } from '../context/ExperienceContext';
import ExperienceItem from '../commons/ExperienceItem';

const Experience = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { experience } = useContext(ExperienceContext)

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
      {experience.map(item => (
        <ExperienceItem
          key={item.company}
          role={item.role}
          company={item.company}
          web={item.web}
          from={item.from}
          until={item.until}
          place={item.place}
        />
      ))}

      <AddExperience open={open} handleClose={handleClose} />
    </div>
  )
}

export default Experience