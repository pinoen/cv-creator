import { Button, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
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

// const summary = document.querySelector('#summary')

const EditSummary = ({ open, handleClose }) => {
  // const dataSummary = useFormik({
  //   initialValues: {
  //     summary: summary.textContent
  //   },
  //   onSubmit: (data) => {
  //     summary.textContent = data.summary
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
          {/* <form className='formContainer' onSubmit={dataSummary.handleSubmit}>
            <Typography variant='h4' color={'primary'}>Edit Summary</Typography>

            <TextField
              id="outlined-multiline-static"
              label="SUMMARY"
              multiline
              rows={8}
              defaultValue={summary.textContent}
              name='summary'
              onChange={dataSummary.handleChange}
              fullWidth
            />
            <Button type='submit' variant='contained' color='primary'>SAVE</Button>
          </form> */}
        </Box>
      </Modal>
    </div>
  )
}

export default EditSummary