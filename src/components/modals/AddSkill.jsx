import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { SkillContext } from '../context/SkillContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddSkill = ({ open, handleClose }) => {

  const { setSkills } = useContext(SkillContext)

  const dataSkill = useFormik({
    initialValues: {
      client: '',
      server: '',
      testing: '',
      devops: '',
      tools: '',
      soft: '',
      languages: ''
    },
    onSubmit: (data) => {
      const item = {
        client: data.client,
        server: data.server,
        testing: data.testing,
        devops: data.devops,
        tools: data.tools,
        soft: data.soft,
        languages: data.languages
      }

      setSkills(() => {
        return [item]
      })

      handleClose()
    }
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className='formContainer' onSubmit={dataSkill.handleSubmit}>
            <Typography variant='h4' color={'primary'}>Add Skills</Typography>

            <TextField id="outlined-basic" label='Client-side' variant="outlined" name='client' placeholder='skill1, skill2, skill3, ...' onChange={dataSkill.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Server-side' variant="outlined" name='server' placeholder='skill1, skill2, skill3, ...' onChange={dataSkill.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Testing' variant="outlined" name='testing' placeholder='skill1, skill2, skill3, ...' onChange={dataSkill.handleChange} fullWidth />
            <TextField id="outlined-basic" label='DevOps' variant="outlined" name='devops' placeholder='skill1, skill2, skill3, ...' onChange={dataSkill.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Tools' variant="outlined" name='tools' placeholder='skill1, skill2, skill3, ...' onChange={dataSkill.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Soft-skills' variant="outlined" name='soft' onChange={dataSkill.handleChange} placeholder='skill1, skill2, skill3, ...' fullWidth />
            <TextField id="outlined-basic" label='Languages' variant="outlined" name='languages' onChange={dataSkill.handleChange} placeholder='skill1, skill2, skill3, ...' fullWidth />

            <Button type='submit' variant='contained' color='primary'>SAVE</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddSkill