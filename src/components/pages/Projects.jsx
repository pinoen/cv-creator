import React, { useContext, useState } from 'react'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AddProject from '../modals/AddProject';
import ProjectItem from '../commons/ProjectItem';
import { ProjectsContext } from '../context/ProjectsContext';
import { LanguageContext } from '../context/LanguageContext';

const Projects = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { projects } = useContext(ProjectsContext)
  const { language } = useContext(LanguageContext)

  const handleMouseOver = () => {
    document.querySelector('.edit-projects').style.display = 'flex'
  }
  const handleMouseOut = () => {
    document.querySelector('.edit-projects').style.display = 'none'
  }
  return (
    <div className='projects-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
        <EditIcon on className='edit-projects' />
      </IconButton>

      <p className='section-title'>{language ? "PROJECTS" : "PROYECTOS"}</p>
      <hr></hr>
      {projects.map(project => (
        <ProjectItem
          key={project.web}
          web={project.web}
          name={project.name}
        />
      ))}

      <AddProject open={open} handleClose={handleClose} />
    </div>
  )
}

export default Projects