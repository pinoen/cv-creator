import React from 'react'

const Tasks = () => {
  const handleMouseOver = () => {
    document.querySelector('.edit-tasks').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-tasks').style.display = 'none'
  }
  return (
    <div className='tasks-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >Tasks
      <button className='edit-tasks'>Edit</button>

    </div>
  )
}

export default Tasks