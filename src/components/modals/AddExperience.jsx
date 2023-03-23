import React, { useContext } from 'react'
import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { ExperienceContext } from '../context/ExperienceContext';
import { LanguageContext } from '../context/LanguageContext';

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

  const { setExperience } = useContext(ExperienceContext)
  const { language } = useContext(LanguageContext)

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
      const item = {
        role: data.role,
        company: data.company,
        web: data.web,
        from: data.from,
        until: data.until,
        place: data.place
      }

      setExperience(preItems => {
        return [...preItems, item]
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
          <form className='formContainer' onSubmit={dataExperience.handleSubmit}>
            <Typography variant='h4' color={'primary'}>{language ? "Add Experience" : "Agregar Experiencia"}</Typography>

            <TextField id="outlined-basic" label='Role' variant="outlined" name='role' placeholder='Role' onChange={dataExperience.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Company' variant="outlined" name='company' placeholder='Company' onChange={dataExperience.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Web page' variant="outlined" name='web' placeholder='Web page url' onChange={dataExperience.handleChange} fullWidth />
            <TextField id="outlined-basic" label='From' variant="outlined" name='from' placeholder='month/year' onChange={dataExperience.handleChange} fullWidth />
            <TextField id="outlined-basic" label='To' variant="outlined" name='until' placeholder='month/year' onChange={dataExperience.handleChange} fullWidth />
            <TextField id="outlined-basic" label='City, Country' variant="outlined" name='place' onChange={dataExperience.handleChange} placeholder='City, Country' fullWidth />

            <Button type='submit' variant='contained' color='primary'>{language ? "SAVE" : "GUARDAR"}</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddExperience