import React from 'react'

const Courses = () => {
  const handleMouseOver = () => {
    document.querySelector('.edit-courses').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-courses').style.display = 'none'
  }
  return (
    <div className='courses-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >Courses
      <button className='edit-courses'>Edit</button>

    </div>
  )
}

export default Courses