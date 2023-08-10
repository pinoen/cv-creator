import React, { useState } from 'react'
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const ExperienceItem = ({ experience }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false)

  const handleMouseOver = () => {
    setShowDeleteBtn(curr => !curr)
  }

  const deleteItem = (item) => {
    const currArr = JSON.parse(localStorage.getItem('experience'))
    const updatedArr = currArr.filter(experience => experience.company !== item)
    localStorage.setItem('experience', JSON.stringify(updatedArr))
    window.location.reload()
  }

  return (
    <>
      <h4 className='experience-title'>{experience.role}</h4>
      <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} className='experience-style' >
        <a href={experience.web} target="_blank" rel="noreferrer">{experience.company}</a>
        <div className='experience-style-icons' >
          <EventIcon fontSize='smaller' color='action' /><p>{experience.from} - {experience.until}</p>
          <LocationOnIcon fontSize='smaller' color='action' /><p>{experience.place}</p>
        </div>
        {showDeleteBtn && <IconButton onClick={() => deleteItem(experience.company)}><ClearIcon fontSize='smaller' color='error' /></IconButton>}
      </div>
    </>
  )
}

export default ExperienceItem