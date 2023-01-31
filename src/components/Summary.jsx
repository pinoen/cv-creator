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

    >Summary
      <button className='edit-summary'>Edit</button>
    </div>
  )
}

export default Summary