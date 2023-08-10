import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AddEducation from '../modals/AddEducation';
import React, { useState, useContext } from 'react'
import { EducationContext } from '../context/EducationContext';
import EducationItem from '../commons/EducationItem';
import { LanguageContext } from '../context/LanguageContext';


const Education = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { education } = useContext(EducationContext)
  const { language } = useContext(LanguageContext)

  const handleMouseOver = () => {
    document.querySelector('.edit-education').style.display = 'flex'
  }
  const handleMouseOut = () => {
    document.querySelector('.edit-education').style.display = 'none'
  }
  return (
    <div className='education-container'
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
        <EditIcon on className='edit-education' />
      </IconButton>

      <p className='section-title'>{language ? "EDUCATION" : "EDUCACION"}</p>
      <hr></hr>
      {education.map(item => (
        <EducationItem
          key={item.career}
          education={item}
        />
      ))}

      <AddEducation open={open} handleClose={handleClose} />
    </div>
  )
}

export default Education