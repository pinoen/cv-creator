import React, { useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const TaskItem = ({ task }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false)

  const handleMouseOver = () => {
    setShowDeleteBtn(curr => !curr)
  }

  const deleteItem = (item) => {
    const currArr = JSON.parse(localStorage.getItem('tasks'))
    const updatedArr = currArr.filter(task => task !== item)
    localStorage.setItem('tasks', JSON.stringify(updatedArr))
    window.location.reload()
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }} className='task-style' onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
        <DoneIcon fontSize='smaller' /><p>{task}</p>
        {showDeleteBtn && <IconButton onClick={() => deleteItem(task)}><ClearIcon fontSize='smaller' color='error' /></IconButton>}
      </div>
    </>
  )
}

export default TaskItem