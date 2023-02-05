import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react'
import EditSummary from '../modals/EditSummary';

const Summary = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleMouseOver = () => {
    document.querySelector('.edit-summary').style.display = 'flex'
  }
  const handleMouseOut = () => {
    document.querySelector('.edit-summary').style.display = 'none'
  }

  return (
    <div className='summary-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
        <EditIcon on className='edit-summary' />
      </IconButton>
      <p>SUMMARY</p>
      <hr></hr>
      <p id='summary'>I worked for 15 years in the building, oil, and gas industries as a safety supervisor with the primary goal of keeping a safe workplace. Eso mismo.</p>

      <EditSummary open={open} handleClose={handleClose} />
    </div>
  )
}

export default Summary