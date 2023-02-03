import React from 'react'
import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';

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


const AddExperience = ({ open, handleClose }) => {
  const experienceContainer = document.querySelector('.experience-container')

  const dataExperience = useFormik({
    initialValues: {
      role: '',
      company: '',
      web: '',
      from: '',
      until: '',
      place: ''
    },
    onSubmit: (data) => {
      const item = `
      <h3>${data.role}</h3>
      <div class='experience-style'>
        <a href='${data.web}' target={'_blank'} rel="noreferrer">${data.company}</a>
        <div class='experience-style-icons'>
        <svg class="MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmaller css-1lmaed1-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EventIcon"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></svg><p>${data.from} - ${data.until}</p>
        <svg class="MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmaller css-1lmaed1-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg><p>${data.place}</p>
        </div>
      </div>
      `
      experienceContainer.innerHTML += item
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
          <form className='formContainer' onSubmit={dataExperience.handleSubmit}>
            <Typography variant='h4' color={'primary'}>Add Experience</Typography>

            <TextField id="outlined-basic" label='Role' variant="outlined" name='role' placeholder='Role' onChange={dataExperience.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Company' variant="outlined" name='company' placeholder='Company' onChange={dataExperience.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Web page' variant="outlined" name='web' placeholder='Web page url' onChange={dataExperience.handleChange} fullWidth />
            <TextField id="outlined-basic" label='From' variant="outlined" name='from' placeholder='month/year' onChange={dataExperience.handleChange} fullWidth />
            <TextField id="outlined-basic" label='To' variant="outlined" name='until' placeholder='month/year' onChange={dataExperience.handleChange} fullWidth />
            <TextField id="outlined-basic" label='City, Country' variant="outlined" name='place' onChange={dataExperience.handleChange} placeholder='City, Country' fullWidth />

            <Button type='submit' variant='contained' color='primary'>SAVE</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddExperience