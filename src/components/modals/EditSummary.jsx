import { Button, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { SummaryContext } from '../context/SummaryContext'

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

const EditSummary = ({ open, handleClose }) => {

  const { setSummary } = useContext(SummaryContext)

  const dataSummary = useFormik({
    initialValues: {
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    onSubmit: (data) => {
      setSummary(data.summary)

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
          <form className='formContainer' onSubmit={dataSummary.handleSubmit}>
            <Typography variant='h4' color={'primary'}>Edit Summary</Typography>

            <TextField
              id="outlined-multiline-static"
              label="SUMMARY"
              multiline
              rows={8}
              placeholder='Write down your summary'
              name='summary'
              onChange={dataSummary.handleChange}
              fullWidth
            />
            <Button type='submit' variant='contained' color='primary'>SAVE</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default EditSummary