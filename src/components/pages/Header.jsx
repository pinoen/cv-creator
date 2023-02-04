import React, { useState } from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import EditHeader from '../modals/EditHeader';

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMouseOver = () => {
    document.querySelector('.edit-header').style.display = 'flex'
  }
  const handleMouseOut = () => {
    document.querySelector('.edit-header').style.display = 'none'
  }
  return (
    <div className='header-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>

      <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
        <EditIcon on className='edit-header' />
      </IconButton>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h1 id='full-name'>EMILIO NICOLAS PINO</h1>
          <h3 id='job-title'>Full Stack Developer</h3>
        </div>
        <img id='profile-img' src='https://avatars.githubusercontent.com/u/91059020?v=4' alt='profile'></img>
      </div>

      <div className='contact-data'>
        <PhoneAndroidIcon color='action' /><p id='mobile'>+54 9 299 4184677</p>
        <EmailIcon color='action' /><a id='email' href='mailto:pinoen@yahoo.com.ar'>pinoen@yahoo.com.ar</a>
        <LocationOnIcon color='action' /><p id='city'>Mendoza, Argentina</p>
        <GitHubIcon color='action' /><a id='github' href='https://github.com/pinoen' target={'_blank'} rel="noreferrer">github.com/pinoen</a>
        <LinkedInIcon color='action' /><a id='linkedin' href='https://www.linkedin.com/in/emiliopino/' target={'_blank'} rel="noreferrer">linkedin.com/in/emiliopino</a>
      </div>

      <EditHeader
        open={open}
        handleClose={handleClose}
      />
    </div>
  )
}

export default Header