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
      transform: 'translate(19px, -6px) scale(0.75) !important',

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
      padding: '18px 18.5px 19px 18.5px',
      lineHeight: '20px',
   },
   focused: {},
   error: {
      '&$focused $outline': {
         borderColor: '#f44336',
      },
   },
   outline: {
      paddingLeft: '14px !important',
   },
   helperText: {
      fontFamily: variables.fontPrimary,
      fontSize: '1.2rem',
      margin: '6px 16px -18px',
      letterSpacing: '0.03px',
   },
})

class Email extends Component {
   constructor(props) {
      super(props)
      this.state = {
         error: '',
      }

      // for google audit Accesibility
      this.inputID = 'formEmailInputID'
   }

   validate = isValid => {
      const email = this.props.value.trim()
      let error = ''
      if (email) {
         // eslint-disable-next-line no-useless-escape
         const validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         if (!validator.test(email)) error = 'Pls enter valid Email'
      } else error = 'Email is required'
      this.setState({ error })
      isValid(!error)
   }

   render() {
      const { classes, className, isValid, ...rest } = this.props
      return (
         <TextField
            className={className}
            label="Email"
            placeholder="Your email"
            name="email"
            type="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            error={!!this.state.error}
            onBlur={() => this.validate(isValid)}
            helperText={this.state.error}
            InputLabelProps={{
               shrink: true,
               htmlFor: this.inputID,
               classes: {
                  shrink: classes.label,
                  focused: classes.focused,
                  error: classes.error,
               },
            }}
            InputProps={{
               id: this.inputID,
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

Email.propTypes = {
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
   isValid: PropTypes.func.isRequired,
   value: PropTypes.string.isRequired,
}

export default withStyles(styles)(Email)
