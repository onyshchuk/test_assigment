import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextButton from './../Buttons/TextButton'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const styles = () => ({
   dialog: {
      width: '29rem',
      height: '17.8rem',
   },
   title: {
      fontSize: '2rem',
   },
   text: {
      fontSize: '1.6rem',
   },
})

const Modal = props => {
   const { dialog, title, text } = props.classes
   return (
      <div>
         <Dialog
            open={props.open}
            onClose={props.handleModalClose}
            classes={{ paperWidthSm: dialog }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogTitle
               id="alert-dialog-title"
               disableTypography
               classes={{ root: title }}
            >
               {'Congratulations'}
            </DialogTitle>
            <DialogContent>
               <DialogContentText
                  id="alert-dialog-description"
                  classes={{ root: text }}
               >
                  You have succesfully passed the registration
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <TextButton onClick={props.handleModalClose} autoFocus>
                  OK
               </TextButton>
            </DialogActions>
         </Dialog>
      </div>
   )
}

Modal.propTypes = {
   classes: PropTypes.object.isRequired,
   open: PropTypes.bool,
   handleModalClose: PropTypes.func,
}

export default withStyles(styles)(Modal)
