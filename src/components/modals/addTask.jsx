import React, { useContext } from 'react'
import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { TaskContext } from '../context/TaskContext';

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

const AddTask = ({ open, handleClose }) => {

  const { setTask } = useContext(TaskContext)

  const dataTask = useFormik({
    initialValues: {
      task: '',
    },
    onSubmit: (data) => {
      const item = data.task

      setTask(preItems => {
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
          <form className='formContainer' onSubmit={dataTask.handleSubmit}>
            <Typography variant='h4' color={'primary'}>Add Task</Typography>

            <TextField
              id="outlined-multiline-static"
              label="TASK"
              multiline
              rows={4}
              placeholder='Add a task or responsality'
              name='task'
              onChange={dataTask.handleChange}
              fullWidth
            />

            <Button type='submit' variant='contained' color='primary'>SAVE</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddTask