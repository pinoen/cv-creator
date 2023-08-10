import React, { useContext, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import EditHeader from '../modals/EditHeader';
import HeaderItem from '../commons/HeaderItem';
import { HeaderContext } from '../context/HeaderContext';

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useContext(HeaderContext)

  const handleMouseOver = () => {
    document.querySelector('.edit-header').style.display = 'flex'
  }
  const handleMouseOut = () => {
    document.querySelector('.edit-header').style.display = 'none'
  }

  return (
    <div className='header-container'
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}>

      <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
        <EditIcon on className='edit-header' />
      </IconButton>

      {user.map(data => (
        <HeaderItem
          key={data.email}
          fullName={data.fullName}
          jobTitle={data.jobTitle}
          profilePicture={data.profilePicture}
          mobile={data.mobile}
          email={data.email}
          city={data.city}
          github={data.github}
          linkedin={data.linkedin}
        />
      ))}

      <EditHeader
        open={open}
        handleClose={handleClose}
      />
    </div>
  )
}

export default Header