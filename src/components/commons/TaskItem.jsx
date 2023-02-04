import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

const TaskItem = ({ task }) => {
  return (
    <>
      <div className='task-style'><DoneIcon fontSize='smaller' /><p>{task}</p></div>
    </>
  )
}

export default TaskItem