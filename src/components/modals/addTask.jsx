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


const AddTask = ({ open, handleClose }) => {
  const taskContainer = document.querySelector('.tasks-container')

  const dataTask = useFormik({
    initialValues: {
      task: '',
    },
    onSubmit: (data) => {
      const item = `
      <div class='task-style'><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmaller css-821wyw-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DoneIcon"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg><p>${data.task}</p></div>
      `
      taskContainer.innerHTML += item
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