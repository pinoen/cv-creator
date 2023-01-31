import React from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
      onMouseOut={handleMouseOut}>
      <button className='edit-header'>Edit</button>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div>
          <h1>EMILIO NICOLAS PINO</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <img id='profile-img' src='https://avatars.githubusercontent.com/u/91059020?v=4' alt='profile'></img>

      </div>

      <div className='contact-data'>
        <PhoneAndroidIcon color='action' /><p>+54 9 299 4184677</p>
        <EmailIcon color='action' /><a href='mailto:pinoen@yahoo.com.ar'>pinoen@yahoo.com.ar</a>
        <LocationOnIcon color='action' /><p>Mendoza, Argentina</p>
        <GitHubIcon color='action' /><a href='https://github.com/pinoen' target={'_blank'} rel="noreferrer">github.com/pinoen</a>
        <LinkedInIcon color='action' /><a href='https://www.linkedin.com/in/emiliopino/' target={'_blank'} rel="noreferrer">linkedin.com/in/emiliopino</a>
      </div>



    </div>
  )
}

export default Header