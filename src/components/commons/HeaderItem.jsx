import React from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HeaderItem = ({ fullName, jobTitle, profilePicture, mobile, email, city, github, linkedin }) => {
  return (
    <>
      <div className='header-title'>
        <div>
          <h1 id='full-name'>{fullName}</h1>
          <h3 id='job-title'>{jobTitle}</h3>
        </div>
        <img id='profile-img' src={profilePicture} alt='profile'></img>
      </div>

      <div className='contact-data'>
        <PhoneAndroidIcon color='action' /><p id='mobile'>{mobile}</p>
        <EmailIcon color='action' /><a href='mailto:' id='email'>{email}</a>
        <LocationOnIcon color='action' /><p id='city'>{city}</p>
        <GitHubIcon color='action' /><a id='github' href={github} target={'_blank'} rel="noreferrer">{github.split('://')[1]}</a>
        <LinkedInIcon color='action' /><a id='linkedin' href={linkedin} target={'_blank'} rel="noreferrer">{linkedin.split('//www.')[1]}</a>
      </div>
    </>
  )
}

export default HeaderItem