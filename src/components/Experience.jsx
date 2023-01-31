import React from 'react'

const Experience = () => {
  const handleMouseOver = () => {
    document.querySelector('.edit-experience').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-experience').style.display = 'none'
  }
  return (
    <div className='experience-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >Experience
      <button className='edit-experience'>Edit</button>

    </div>
  )
}

export default Experience