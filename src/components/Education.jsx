import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AddEducation from './modals/AddEducation';
import React, { useState, useContext } from 'react'
import { EducationContext } from './context/EducationContext';
import EducationItem from './commons/EducationItem';


const Education = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { education } = useContext(EducationContext)

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
      {education.map(item => (
        <EducationItem
          career={item.career}
          institution={item.institution}
          web={item.web}
          from={item.from}
          until={item.until}
          place={item.place}
        />
      ))}


      <AddEducation open={open} handleClose={handleClose} />
    </div>
  )
}

export default Education