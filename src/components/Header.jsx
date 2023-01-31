import React from 'react'

const Header = () => {

  const handleMouseOver = () => {
    document.querySelector('.edit-header').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-header').style.display = 'none'
  }
  return (
    <div className='header-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}

    >Header
      <button className='edit-header'>Edit</button>

    </div>
  )
}

export default Header