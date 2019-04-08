import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import variables from './../../sass/abstracts/_variables.scss'

const styles = () => ({
   root: {
      '&$focused $outline': {
         borderColor: 'grey',
      },
   },
   label: {
      fontFamily: variables.fontPrimary,
      transform: 'translate(16px, -6px) scale(0.75) !important',

      '&$focused': {
         color: 'grey',

         '&$error': {
            color: '#f44336',
         },
      },
   },
   input: {
      fontFamily: variables.fontPrimary,
      fontSize: '1.6rem',
      padding: '18px 16px',
   },
   focused: {},
   error: {
      '&$focused $outline': {
         borderColor: '#f44336',
      },
   },
   outline: {
      paddingLeft: '11px !important',
   },
   helperText: {
      fontFamily: variables.fontPrimary,
      fontSize: '1.2rem',
      margin: '6px 16px -18px',
      letterSpacing: '0.03px',
   },
})

class Name extends Component {
   constructor(props) {
      super(props)
      this.state = {
         error: '',
      }
   }

   validate = isValid => {
      const name = this.props.value.trim()
      let error = ''
      if (name) {
         if (name.length >= 2 && name.length <= 60) {
            if (!/^[a-z ,.'-]+$/i.test(name))
               error = "Name should include only letters and , . ' -"
         } else error = 'Name should be 2-60 characters long'
      } else error = 'Name is required'
      this.setState({ error })
      isValid(!error)
   }

   render() {
      const { classes, className, isValid, ...rest } = this.props

      return (
         <TextField
            className={className}
            label="Name"
            placeholder="Your name"
            margin="normal"
            variant="outlined"
            error={!!this.state.error}
            onBlur={() => this.validate(isValid)}
            helperText={this.state.error}
            InputLabelProps={{
               shrink: true,
               classes: {
                  shrink: classes.label,
                  focused: classes.focused,
                  error: classes.error,
               },
            }}
            InputProps={{
               classes: {
                  root: classes.root,
                  focused: classes.focused,
                  error: classes.error,
                  notchedOutline: classes.outline,
                  input: classes.input,
               },
            }}
            FormHelperTextProps={{
               classes: {
                  root: classes.helperText,
               },
            }}
            {...rest}
         />
      )
   }
}

Name.propTypes = {
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
   isValid: PropTypes.func.isRequired,
   value: PropTypes.string.isRequired,
}

export default withStyles(styles)(Name)
