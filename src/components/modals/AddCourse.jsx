import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { CoursesContext } from '../context/CoursesContext';
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

const AddCourse = ({ open, handleClose }) => {

  const { setCourses } = useContext(CoursesContext)
  const { language } = useContext(LanguageContext)

  const dataCourse = useFormik({
    initialValues: {
      name: '',
      web: ''
    },
    onSubmit: (data) => {
      const item = {
        name: data.name,
        web: data.web
      }

      setCourses(preItems => {
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
          <form className='formContainer' onSubmit={dataCourse.handleSubmit}>
            <Typography variant='h4' color={'primary'}>{language ? "Add Course" : "Agregar Curso"}</Typography>

            <TextField id="outlined-basic" label='Course name' variant="outlined" name='name' placeholder='Course name' onChange={dataCourse.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Certificate link' variant="outlined" name='web' placeholder='Certificate link' onChange={dataCourse.handleChange} fullWidth />

            <Button type='submit' variant='contained' color='primary'>{language ? "SAVE" : "GUARDAR"}</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddCourse