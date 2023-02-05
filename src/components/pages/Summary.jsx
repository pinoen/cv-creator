import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useState } from 'react'
import EditSummary from '../modals/EditSummary';
import { SummaryContext } from '../context/SummaryContext';

const Summary = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { summary } = useContext(SummaryContext)

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

      <p id='summary'>{summary}</p>

      <EditSummary open={open} handleClose={handleClose} />
    </div>
  )
}

export default Summary