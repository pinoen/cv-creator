import React from 'react'

const Skills = () => {
  const handleMouseOver = () => {
    document.querySelector('.edit-skills').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-skills').style.display = 'none'
  }
  return (
    <div className='skills-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >Skills
      <button className='edit-skills'>Edit</button>

    </div>
  )
}

export default Skills