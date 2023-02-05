import React from 'react'
import CodeIcon from '@mui/icons-material/Code';

const CourseItem = ({ name, web }) => {
  return (
    <div className='course-box'><CodeIcon fontSize='smaller' />
      <a href={web} target={'_blank'} rel="noreferrer">{name}</a>
    </div>
  )
}

export default CourseItem