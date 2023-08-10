import React, { useState } from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const ProjectItem = ({ name, web }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false)

  const handleMouseOver = () => {
    setShowDeleteBtn(curr => !curr)
  }

  const deleteItem = (item) => {
    const currArr = JSON.parse(localStorage.getItem('projects'))
    const updatedArr = currArr.filter(project => project.name !== item)
    localStorage.setItem('projects', JSON.stringify(updatedArr))
    window.location.reload()
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} className='project-box'>
      <LaunchIcon fontSize='smaller' />
      <a href={web} target='_blank' rel="noreferrer" >{name}</a>
      {showDeleteBtn && <IconButton onClick={() => deleteItem(name)}><ClearIcon fontSize='smaller' color='error' /></IconButton>}
    </div>
  )
}

export default ProjectItem