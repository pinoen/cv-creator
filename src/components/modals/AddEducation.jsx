import React, { useContext } from 'react'
import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { EducationContext } from '../context/EducationContext';
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

const AddEducation = ({ open, handleClose }) => {

  const { setEducation } = useContext(EducationContext)
  const { language } = useContext(LanguageContext)

  const dataEducation = useFormik({
    initialValues: {
      career: '',
      institution: '',
      web: '',
      from: '',
      until: '',
      place: ''
    },
    onSubmit: (data) => {
      const item = {
        career: data.career,
        institution: data.institution,
        web: data.web,
        from: data.from,
        until: data.until,
        place: data.place
      }

      setEducation(preItems => {
        return [item, ...preItems]
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
          <form className='formContainer' onSubmit={dataEducation.handleSubmit}>
            <Typography variant='h4' color={'primary'}>{language ? "Add Education" : "Agregar Educacion"}</Typography>

            <TextField id="outlined-basic" label='Career title' variant="outlined" name='career' placeholder='Career title' onChange={dataEducation.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Institution' variant="outlined" name='institution' placeholder='Institution' onChange={dataEducation.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Web page' variant="outlined" name='web' placeholder='Web page url' onChange={dataEducation.handleChange} fullWidth />
            <TextField id="outlined-basic" label='From' variant="outlined" name='from' placeholder='month/year' onChange={dataEducation.handleChange} fullWidth />
            <TextField id="outlined-basic" label='To' variant="outlined" name='until' placeholder='month/year' onChange={dataEducation.handleChange} fullWidth />
            <TextField id="outlined-basic" label='City, Country' variant="outlined" name='place' onChange={dataEducation.handleChange} placeholder='City, Country' fullWidth />

            <Button type='submit' variant='contained' color='primary'>{language ? "SAVE" : "GUARDAR"}</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddEducation