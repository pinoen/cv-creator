import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  paddingTop: '10px',
};

const fullName = document.querySelector('#full-name').textContent;
const jobTitle = document.querySelector('#job-title').textContent;
const profilePicture = document.querySelector('#profile-img').src;
const mobile = document.querySelector('#mobile').textContent;
const email = document.querySelector('#email').textContent;
const city = document.querySelector('#city').textContent;
const github = document.querySelector('#github').textContent;
const linkedin = document.querySelector('#linkedin').textContent;

export default function EditHeader({ open, handleClose }) {

  const dataHeader = useFormik({
    initialValues: {
      fullName: fullName,
      jobTitle: jobTitle,
      profilePicture: profilePicture,
      mobile: mobile,
      email: email,
      city: city,
      github: github,
      linkedin: linkedin
    },
    onSubmit: (data) => {
      document.querySelector('#full-name').textContent = data.fullName;
      document.querySelector('#job-title').textContent = data.jobTitle;
      document.querySelector('#profile-img').src = data.profilePicture;
      document.querySelector('#mobile').textContent = data.mobile;
      document.querySelector('#email').textContent = data.email;
      document.querySelector('#city').textContent = data.city;
      document.querySelector('#github').textContent = data.github;
      document.querySelector('#linkedin').textContent = data.linkedin;
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
          <form className='formContainer' onSubmit={dataHeader.handleSubmit} >
            <Typography variant='h4' color='primary' >Editar Header</Typography>

            <TextField id="outlined-basic" label='Full name' variant="outlined" name='fullName' onChange={dataHeader.handleChange} placeholder={fullName} fullWidth />
            <TextField id="outlined-basic" label='Job title' variant="outlined" name='jobTitle' onChange={dataHeader.handleChange} placeholder={jobTitle} fullWidth />
            <TextField id="outlined-basic" label='Profile picture url' variant="outlined" name='profilePicture' onChange={dataHeader.handleChange} placeholder={profilePicture} fullWidth />

            <TextField id="outlined-basic" label='Mobile number' variant="outlined" name='mobile' onChange={dataHeader.handleChange} placeholder={mobile} fullWidth />
            <TextField id="outlined-basic" label='Email' variant="outlined" name='email' onChange={dataHeader.handleChange} placeholder={email} fullWidth />
            <TextField id="outlined-basic" label='City' variant="outlined" name='city' onChange={dataHeader.handleChange} placeholder={city} fullWidth />
            <TextField id="outlined-basic" label='Github account' variant="outlined" name='github' onChange={dataHeader.handleChange} placeholder={github} fullWidth />
            <TextField id="outlined-basic" label='Linkedin account' variant="outlined" name='linkedin' onChange={dataHeader.handleChange} placeholder={linkedin} fullWidth />

            <Button type='submit' variant='contained' color='primary'>Actualizar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}