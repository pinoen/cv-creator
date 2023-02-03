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
};

// const fullName = document.querySelector('#full-name');
// const jobTitle = document.querySelector('#job-title');
// const profilePicture = document.querySelector('#profile-img');
// const mobile = document.querySelector('#mobile');
// const email = document.querySelector('#email');
// const city = document.querySelector('#city');
// const github = document.querySelector('#github');
// const linkedin = document.querySelector('#linkedin');

export default function EditHeader({ open, handleClose }) {
  // const dataHeader = useFormik({
  //   initialValues: {
  //     fullName: fullName.textContent,
  //     jobTitle: jobTitle.textContent,
  //     profilePicture: profilePicture.textContent,
  //     mobile: mobile.textContent,
  //     email: email.textContent,
  //     city: city.textContent,
  //     github: github.textContent,
  //     linkedin: linkedin.textContent
  //   },
  //   onSubmit: (data) => {
  //     fullName.textContent = data.fullName
  //     jobTitle.textContent = data.jobTitle;
  //     profilePicture.src = data.profilePicture;
  //     mobile.textContent = data.mobile;
  //     email.textContent = data.email;
  //     city.textContent = data.city;
  //     github.textContent = data.github;
  //     linkedin.textContent = data.linkedin;
  //     handleClose()
  //   }
  // })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <form className='formContainer' onSubmit={dataHeader.handleSubmit} >
            <Typography variant='h4' color='primary' >Edit Header</Typography>

            <TextField id="outlined-basic" label='Full name' variant="outlined" name='fullName' onChange={dataHeader.handleChange} placeholder={fullName.textContent} fullWidth />
            <TextField id="outlined-basic" label='Job title' variant="outlined" name='jobTitle' onChange={dataHeader.handleChange} placeholder={jobTitle.textContent} fullWidth />
            <TextField id="outlined-basic" label='Profile picture url' variant="outlined" name='profilePicture' onChange={dataHeader.handleChange} placeholder={profilePicture.src} fullWidth />
            <TextField id="outlined-basic" label='Mobile number' variant="outlined" name='mobile' onChange={dataHeader.handleChange} placeholder={mobile.textContent} fullWidth />
            <TextField id="outlined-basic" label='Email' variant="outlined" name='email' onChange={dataHeader.handleChange} placeholder={email.textContent} fullWidth />
            <TextField id="outlined-basic" label='City, Country' variant="outlined" name='city' onChange={dataHeader.handleChange} placeholder={city.textContent} fullWidth />
            <TextField id="outlined-basic" label='Github account' variant="outlined" name='github' onChange={dataHeader.handleChange} placeholder={github.textContent} fullWidth />
            <TextField id="outlined-basic" label='Linkedin account' variant="outlined" name='linkedin' onChange={dataHeader.handleChange} placeholder={linkedin.textContent} fullWidth />

            <Button type='submit' variant='contained' color='primary'>SAVE</Button>
          </form> */}
        </Box>
      </Modal>
    </div>
  );
}