import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import variables from './../../sass/abstracts/_variables.scss'

const styles = () => ({
   label: {
      fontFamily: variables.fontPrimary,
      transform: 'translate(19px, -6px) scale(0.75) !important',
   },
   input: {
      fontFamily: variables.fontPrimary,
      fontSize: '1.6rem',
      padding: '18px 18.5px',
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
            placeholder="Your Email"
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
               classes: {
                  shrink: classes.label,
               },
            }}
            InputProps={{
               classes: {
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
