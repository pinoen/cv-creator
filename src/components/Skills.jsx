import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'

const Skills = () => {
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

      <IconButton aria-label="edit" color="secondary">
        <EditIcon on className='edit-skills' />
      </IconButton>

      <p className='section-title'>SKILLS</p>
      <hr></hr>
      <h4>Client-side</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingBottom: '10px' }}>
        <span>HTML</span><span>CSS</span><span>Sass</span><span>Bootstrap</span><span>React</span>
      </div>

      <h4>Server-side</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingBottom: '10px' }}>
        <span>MySQL</span><span>MongoDB</span><span>Node.js</span><span>Java</span><span>SpringBoot</span><span>Hibernate</span>
      </div>

      <h4>Testing</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingBottom: '10px' }}>
        <span>Jest</span><span>JUnit</span><span>Selenium</span><span>Log4J</span>
      </div>

      <h4>DevOps</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingBottom: '10px' }}>
        <span>CLI Linux</span><span>Bash</span><span>VirtualBox</span><span>Git</span><span>GitHub</span><span>Docker</span><span>Cloud Computing</span>
      </div>
      <h4>Tools</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingBottom: '10px' }}>
        <span>Visual Studio Code</span><span>IntelliJDEA</span><span>Postman</span><span>Figma</span><span>Workbench</span><span>UML</span><span>Trello</span>
      </div>

      <h4>Soft-skills</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingBottom: '10px' }}>
        <span>Agile methodologies</span><span>Design Thinking</span><span>UX/UI</span><span>Effective Communication</span><span>Teamwork & Collaboration</span>
      </div>

      <h4>Languages</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingBottom: '10px' }}>
        <span>Spanish (native)</span><span>English (full professional proficiency)</span>
      </div>
    </div>
  )
}

export default Skills