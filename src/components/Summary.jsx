import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'

const Summary = () => {
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

      <IconButton aria-label="edit" color="secondary">
        <EditIcon on className='edit-summary' />
      </IconButton>
      <p>SUMMARY</p>
      <hr></hr>
      <p>I have worked for  15 years in the building, oil, and gas industries as a safety supervisor with the primary goal of keeping a safer work environment.</p>
      <p>In 2021 I decided to switch my career path into the tech world. Currently I am looking for a company where apply all that I have learned so far.</p>

    </div>
  )
}

export default Summary