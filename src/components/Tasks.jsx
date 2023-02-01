import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import React from 'react'


const Tasks = () => {
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
      <IconButton aria-label="edit" color="secondary">
        <EditIcon on className='edit-tasks' />
      </IconButton>

      <p className='section-title'>MAIN DUTIES AND RESPONSIBILITIES FROM PREVIOUS JOBS</p>
      <hr></hr>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><DoneIcon fontSize='smaller' /><p>Audit, control, and maintenance of Management Systems based on ISO standards.</p></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><DoneIcon fontSize='smaller' /><p>HSE representative before clients and third parties.</p></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><DoneIcon fontSize='smaller' /><p>Coordination of HSE teams.</p></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><DoneIcon fontSize='smaller' /><p>Training in HSE topics.</p></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><DoneIcon fontSize='smaller' /><p>HSE inspections in offices, shops, fields, and building sites.</p></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><DoneIcon fontSize='smaller' /><p>Control and follow-up of key performance indicators.</p></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><DoneIcon fontSize='smaller' /><p>Revision and management of Risk Analysis.</p></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><DoneIcon fontSize='smaller' /><p>Preparation of Safety Programs and legal aspects.</p></div>
      <div style={{ display: 'flex', gap: '2px', alignContent: 'center' }}><DoneIcon fontSize='smaller' /><p>Preparation of Safety Campaigns and Safety Reports.</p></div>

    </div>
  )
}

export default Tasks