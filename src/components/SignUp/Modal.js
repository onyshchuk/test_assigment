import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextButton from './../Buttons/TextButton'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import variables from './../../sass/abstracts/_variables.scss'
import ellipsize, { nodeEllipsize } from '../../utility/ellipsize'

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
      maxHeight: '45px',
   },
   button: {
      margin: '8px 1px 17px 4px',
   },
})

class Modal extends Component {
   constructor(props) {
      super(props)

      this.buttonID = 'modalButtonID'
   }

   componentDidUpdate() {
      if (this.props.open)
         window.setTimeout(() => {
            ellipsize('alert-dialog-description')
            const button = document.getElementById(this.buttonID)
            nodeEllipsize(button.firstElementChild, button)
         }, 0)
   }

   render() {
      const { dialog, title, text, button } = this.props.classes
      return (
         <div>
            <Dialog
               open={this.props.open}
               onClose={this.props.handleModalClose}
               classes={{ paper: dialog }}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
            >
               <DialogTitle
                  id="alert-dialog-title"
                  disableTypography
                  className="modal__title"
                  classes={{ root: title }}
               >
                  Congratulations
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
                  <TextButton
                     id={this.buttonID}
                     className="modal__button"
                     onClick={this.props.handleModalClose}
                     autoFocus
                  >
                     OK
                  </TextButton>
               </DialogActions>
            </Dialog>
         </div>
      )
   }
}

Modal.propTypes = {
   classes: PropTypes.object.isRequired,
   open: PropTypes.bool,
   handleModalClose: PropTypes.func,
}

export default withStyles(styles)(Modal)
