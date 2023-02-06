import React, { useContext, useState } from 'react'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AddCourse from '../modals/AddCourse';
import { CoursesContext } from '../context/CoursesContext';
import CourseItem from '../commons/CourseItem';

const Courses = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { courses } = useContext(CoursesContext)

  const handleMouseOver = () => {
    document.querySelector('.edit-courses').style.display = 'flex'
  }

  const handleMouseOut = () => {
    document.querySelector('.edit-courses').style.display = 'none'
  }
  return (
    <div className='courses-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
        <EditIcon on className='edit-courses' />
      </IconButton>

      <p className='section-title'>COURSES</p>
      <hr></hr>
      {courses.map(course => (
        <CourseItem
          key={course.web}
          name={course.name}
          web={course.web}
        />
      ))}

      <AddCourse open={open} handleClose={handleClose} />

    </div>
  )
}

export default Courses