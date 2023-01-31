import React from 'react'

const Projects = () => {
  const handleMouseOver = () => {
    document.querySelector('.edit-projects').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-projects').style.display = 'none'
  }
  return (
    <div className='projects-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >Projects

      <button className='edit-projects'>Edit</button>

    </div>
  )
}

export default Projects