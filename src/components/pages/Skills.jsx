import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useState } from 'react'
import AddSkill from '../modals/AddSkill';
import { SkillContext } from '../context/SkillContext';
import SkillsItems from '../commons/SkillsItems'

const Skills = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { skills } = useContext(SkillContext)

  const handleMouseOver = () => {
    document.querySelector('.edit-skills').style.display = 'flex'
  }
  const handleMouseOut = () => {
    document.querySelector('.edit-skills').style.display = 'none'
  }
  return (
    <div className='skills-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
        <EditIcon on className='edit-skills' />
      </IconButton>

      <p className='section-title'>SKILLS</p>
      <hr></hr>
      {skills.map((skill, index) => (
        <SkillsItems
          key={index}
          client={skill.client}
          server={skill.server}
          testing={skill.testing}
          devops={skill.devops}
          tools={skill.tools}
          soft={skill.soft}
          languages={skill.languages}
        />
      ))}

      <AddSkill open={open} handleClose={handleClose} />
    </div>
  )
}

export default Skills