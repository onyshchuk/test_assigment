import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextButton from './../Buttons/TextButton'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import variables from './../../sass/abstracts/_variables.scss'

const styles = () => ({
   dialog: {
      width: '29rem',
      height: '17.8rem',
      margin: '0',
   },
   title: {
      fontSize: '2.3rem',
      fontFamily: variables.fontSecondary,
      letterSpacing: '-0.8px',
      paddingBottom: '7px',
   },
   text: {
      fontSize: '1.6rem',
      fontFamily: variables.fontPrimary,
      letterSpacing: '0.3px',
      lineHeight: 1.4,
      width: '90%',
   },
   button: {
      margin: '8px 1px 17px 4px',
   },
})

const Modal = props => {
   const { dialog, title, text, button } = props.classes
   return (
      <div>
         <Dialog
            open={props.open}
            onClose={props.handleModalClose}
            classes={{ paper: dialog }}
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
            <DialogActions className={button}>
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
