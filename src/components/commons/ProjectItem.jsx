import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectItem = ({ name, web }) => {
  return (
    <div className='project-box'>
      <LaunchIcon fontSize='smaller' />
      <a href={web} target='_blank' rel="noreferrer" >{name}</a>
    </div>
  )
}

export default ProjectItem