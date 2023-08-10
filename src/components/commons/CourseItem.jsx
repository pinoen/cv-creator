import React, { useState } from 'react'
import CodeIcon from '@mui/icons-material/Code';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const CourseItem = ({ name, web }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false)

  const handleMouseOver = () => {
    setShowDeleteBtn(curr => !curr)
  }

  const deleteItem = (item) => {
    const currArr = JSON.parse(localStorage.getItem('courses'))
    const updatedArr = currArr.filter(course => course.name !== item)
    localStorage.setItem('courses', JSON.stringify(updatedArr))
    window.location.reload()
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} className='course-box'><CodeIcon fontSize='smaller' />
      <a href={web} target={'_blank'} rel="noreferrer">{name}</a>
      {showDeleteBtn && <IconButton onClick={() => deleteItem(name)}><ClearIcon fontSize='smaller' color='error' /></IconButton>}
    </div>
  )
}

export default CourseItem