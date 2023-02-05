import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { HeaderContext } from '../context/HeaderContext';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

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

const EditHeader = ({ open, handleClose }) => {


  const { setUser } = useContext(HeaderContext)

  const dataHeader = useFormik({
    initialValues: {
      fullName: 'FULL NAME',
      jobTitle: 'Job Title',
      profilePicture: 'https://avatars.githubusercontent.com/u/91059020?v=4',
      mobile: '+xx x xxx xxxxxxx',
      email: 'example@mail.com',
      city: 'City, Country',
      github: 'github.com/user',
      linkedin: 'linkedin.com/in/user'
    },
    onSubmit: (data) => {
      const dataUser = {
        fullName: data.fullName,
        jobTitle: data.jobTitle,
        profilePicture: data.profilePicture,
        mobile: data.mobile,
        email: data.email,
        city: data.city,
        github: data.github,
        linkedin: data.linkedin
      }

      console.log(data)

      setUser(() => {
        return [dataUser]
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
          <form className='formContainer' onSubmit={dataHeader.handleSubmit} >
            <Typography variant='h4' color='primary' >Edit Header</Typography>

            <TextField id="outlined-basic" label='Full name' variant="outlined" name='fullName' onChange={dataHeader.handleChange} placeholder='Full name' fullWidth />
            <TextField id="outlined-basic" label='Job title' variant="outlined" name='jobTitle' onChange={dataHeader.handleChange} placeholder='Job Title' fullWidth />
            <TextField id="outlined-basic" label='Profile picture url' variant="outlined" name='profilePicture' onChange={dataHeader.handleChange} placeholder='Image url' fullWidth />
            <TextField id="outlined-basic" label='Mobile number' variant="outlined" name='mobile' onChange={dataHeader.handleChange} placeholder='Mobile number' fullWidth />
            <TextField id="outlined-basic" label='Email' variant="outlined" name='email' onChange={dataHeader.handleChange} placeholder='Email' fullWidth />
            <TextField id="outlined-basic" label='City, Country' variant="outlined" name='city' onChange={dataHeader.handleChange} placeholder='City, Country' fullWidth />
            <TextField id="outlined-basic" label='Github account' variant="outlined" name='github' onChange={dataHeader.handleChange} placeholder='GitHub user' fullWidth />
            <TextField id="outlined-basic" label='Linkedin account' variant="outlined" name='linkedin' onChange={dataHeader.handleChange} placeholder='Linledin user' fullWidth />

            <Button type='submit' variant='contained' color='primary'>SAVE</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default EditHeader