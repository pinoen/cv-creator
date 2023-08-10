import React from 'react'

const SkillsItems = ({ client, server, testing, devops, tools, soft, languages }) => {

  return (
    <>
      <h4 className='.skill-section-title'>Client-side</h4>
      <div className='skill-section-box'>
        {client.toUpperCase().split(',').map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <h4 className='.skill-section-title'>Server-side</h4>
      <div className='skill-section-box'>
        {server.toUpperCase().split(',').map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <h4 className='.skill-section-title'>Testing</h4>
      <div className='skill-section-box'>
        {testing.toUpperCase().split(',').map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <h4 className='.skill-section-title'>DevOps</h4>
      <div className='skill-section-box'>
        {devops.toUpperCase().split(',').map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <h4 className='.skill-section-title'>Tools</h4>
      <div className='skill-section-box'>
        {tools.toUpperCase().split(',').map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <h4 className='.skill-section-title'>Soft-skills</h4>
      <div className='skill-section-box'>
        {soft.toUpperCase().split(',').map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <h4 className='.skill-section-title'>Languages</h4>
      <div className='skill-section-box'>
        {languages.toUpperCase().split(',').map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </>
  )
}

export default SkillsItems