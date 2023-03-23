import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useState } from 'react'
import AddTask from '../modals/addTask';
import { TaskContext } from '../context/TaskContext';
import TaskItem from '../commons/TaskItem';
import { LanguageContext } from '../context/LanguageContext';

const Tasks = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { task } = useContext(TaskContext)
  const { language } = useContext(LanguageContext)

  const handleMouseOver = () => {
    document.querySelector('.edit-tasks').style.display = 'flex'
  }
  const handleMouseOut = () => {
    document.querySelector('.edit-tasks').style.display = 'none'
  }
  return (
    <div className='tasks-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
        <EditIcon on className='edit-tasks' />
      </IconButton>

      <p className='section-title'>{language ? "MAIN DUTIES AND RESPONSIBILITIES FROM PREVIOUS JOBS" : "RESPONSABILIDADES DE TRABAJOS PREVIOS"}</p>
      <hr></hr>
      {task.map(item => (
        <TaskItem
          key={item}
          task={item}
        />
      ))}


      <AddTask open={open} handleClose={handleClose} />

    </div>
  )
}

export default Tasks