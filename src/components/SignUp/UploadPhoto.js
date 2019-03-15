import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SecondaryButton from './../Buttons/SecondaryButton'
import TextField from '@material-ui/core/TextField'
import variables from './../../sass/abstracts/_variables.scss'

const styles = () => ({
   button: {
      fontFamily: variables.fontPrimary,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      padding: '12px 31px',
      marginLeft: '-1px',
   },
   input: {
      display: 'none',
   },
   textField: {
      margin: 0,
      flexGrow: 1,
   },
   textFieldInput: {
      fontSize: '1.6rem',
      fontFamily: variables.fontPrimary,
      padding: '18px 16px',
   },
   textFieldOutline: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
   },
   helperText: {
      fontFamily: variables.fontPrimary,
      fontSize: '1.2rem',
      margin: '6px 16px 0',
      letterSpacing: '0.03px',
   },
})

class UploadPhoto extends Component {
   constructor(props) {
      super(props)

      this.state = {
         photoName: '',
         error: '',
      }
   }

   validate = file => {
      const fileType = file.type.split('/').pop()
      let error = ''
      if (fileType !== 'jpg' && fileType !== 'jpeg')
         error = 'file format must be jpg'
      if (file.size > 5120000) error = 'Max file size is 5 MB'
      return error
   }

   handleChange = e => {
      const file = e.target.files[0]
      if (file) {
         const error = this.validate(e.target.files[0])
         if (!error) {
            let photos = e.target.value.split('/')
            if (photos.length === 1) photos = photos[0].split('\\')
            const photoName = photos[photos.length - 1]
            this.setState({ photoName, error })
            this.props.onChange({ target: { value: file } })
         } else {
            this.setState({ error })
            this.props.onChange({ target: { value: '' } })
         }
      }
   }

   render() {
      const { classes, className } = this.props
      return (
         <div className={className}>
            <div>
               <input
                  accept="image/*"
                  className={classes.input}
                  id="uploadPhoto"
                  type="file"
                  onChange={this.handleChange}
               />
               <TextField
                  className={classes.textField}
                  placeholder="Upload your photo"
                  helperText="File format jpg  up to 5 MB, the minimum size of 70x70px"
                  error={!!this.state.error}
                  margin="normal"
                  value={this.state.error || this.state.photoName}
                  InputProps={{
                     readOnly: true,
                     classes: {
                        notchedOutline: classes.textFieldOutline,
                        input: classes.textFieldInput,
                     },
                  }}
                  FormHelperTextProps={{
                     classes: {
                        root: classes.helperText,
                     },
                  }}
                  variant="outlined"
               />
               <label htmlFor="uploadPhoto">
                  <SecondaryButton
                     component="span"
                     className={classes.button}
                     onClick={() => {
                        if (!this.state.photoName)
                           this.setState({
                              error: 'Photo is required',
                           })
                     }}
                  >
                     Upload
                  </SecondaryButton>
               </label>
            </div>
         </div>
      )
   }
}

UploadPhoto.propTypes = {
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
   onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(UploadPhoto)
