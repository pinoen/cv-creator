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
      <p>I worked for 15 years in the building, oil, and gas industries as a safety supervisor with the primary goal of keeping a safe work environment. In 2021, I decided to pursue a career in technology. Currently, I am looking for <em>the company</em> where I can apply all that I have learned so far and keep growing together.</p>

    </div>
  )
}

export default Summary