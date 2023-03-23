import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { ProjectsContext } from '../context/ProjectsContext';
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

const AddProject = ({ open, handleClose }) => {

  const { setProjects } = useContext(ProjectsContext)
  const { language } = useContext(LanguageContext)

  const dataProject = useFormik({
    initialValues: {
      name: '',
      web: ''
    },
    onSubmit: (data) => {
      const item = {
        name: data.name,
        web: data.web
      }

      setProjects(preItems => {
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
          <form className='formContainer' onSubmit={dataProject.handleSubmit}>
            <Typography variant='h4' color={'primary'}>{language ? "Add Project" : "Agregar Proyecto"}</Typography>

            <TextField id="outlined-basic" label='Project name' variant="outlined" name='name' placeholder='Project name' onChange={dataProject.handleChange} fullWidth />
            <TextField id="outlined-basic" label='Project link' variant="outlined" name='web' placeholder='Project link' onChange={dataProject.handleChange} fullWidth />

            <Button type='submit' variant='contained' color='primary'>{language ? "SAVE" : "GUARDAR"}</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddProject