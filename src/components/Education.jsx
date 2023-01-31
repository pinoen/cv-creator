import React from 'react'

const Education = () => {
  const handleMouseOver = () => {
    document.querySelector('.edit-education').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-education').style.display = 'none'
  }
  return (
    <div className='education-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >Education
      <button className='edit-education'>Edit</button>

    </div>
  )
}

export default Education