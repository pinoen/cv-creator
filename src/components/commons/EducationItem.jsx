import React, { useState } from 'react'
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const EducationItem = ({ education }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false)

  const handleMouseOver = () => {
    setShowDeleteBtn(curr => !curr)
  }

  const deleteItem = (item) => {
    const currArr = JSON.parse(localStorage.getItem('education'))
    const updatedArr = currArr.filter(education => education.career !== item)
    localStorage.setItem('education', JSON.stringify(updatedArr))
    window.location.reload()
  }

  return (
    <>
      <h3>{education.career}</h3>
      <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} className='education-style'>
        <a href={education.web} target={'_blank'} rel="noreferrer">{education.institution}</a>
        <div className='education-style-icons' >
          <EventIcon fontSize='small' color='action' /><p>{education.from} - {education.until}</p>
          <LocationOnIcon fontSize='small' color='action' /><p>{education.place}</p>
        </div>
        {showDeleteBtn && <IconButton onClick={() => deleteItem(education.career)}><ClearIcon fontSize='smaller' color='error' /></IconButton>}
      </div>
    </>
  )
}

export default EducationItem