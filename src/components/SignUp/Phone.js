import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import PhoneMask from './PhoneMask'
import variables from './../../sass/abstracts/_variables.scss'

const styles = () => ({
   label: {
      fontFamily: variables.fontPrimary,
      transform: 'translate(16px, -6px) scale(0.75) !important',
   },
   input: {
      fontFamily: variables.fontPrimary,
      fontSize: '1.6rem',
      padding: '18px 16px',
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

class Phone extends Component {
   constructor(props) {
      super(props)

      this.inp = React.createRef()
      this.state = {
         phone: '',
         textmask: '+38 (0__) ___ __ __',
         cursorPosition: 5,
         error: '',
      }
   }

   handleChange = (e, onChange) => {
      const textmask = e.target.value
      const phone = textmask.replace(/_| |\(|\)/g, '')
      let cursorPosition = phone.length + 2
      if (cursorPosition >= 8) cursorPosition += 2
      if (cursorPosition >= 13) cursorPosition++
      if (cursorPosition >= 16) cursorPosition++
      this.setState(prevState => ({
         ...prevState,
         textmask,
         cursorPosition,
         phone,
      }))
      onChange({ target: { value: phone } })
   }

   validate = isValid => {
      const phone = this.state.phone
      let error = ''
      if (phone) {
         if (phone.length < 13) error = 'Pls enter full phone'
      } else error = 'Phone is required'
      this.setState({ error })
      isValid(!error)
   }

   setCaret = () => {
      window.setTimeout(() => {
         this.inp.current.selectionStart = this.state.cursorPosition
         this.inp.current.selectionEnd = this.state.cursorPosition
      }, 0)
   }

   render() {
      const { classes, className, onChange, isValid, ...rest } = this.props
      return (
         <TextField
            className={className}
            label="Phone"
            placeholder="+38 (0__) ___ __ __"
            margin="normal"
            variant="outlined"
            value={this.state.textmask}
            error={!!this.state.error}
            helperText={this.state.error}
            onChange={e => this.handleChange(e, onChange)}
            onFocus={this.setCaret}
            onBlur={() => this.validate(isValid)}
            InputLabelProps={{
               shrink: true,
               classes: {
                  shrink: classes.label,
               },
            }}
            inputRef={this.inp}
            InputProps={{
               classes: {
                  notchedOutline: classes.outline,
                  input: classes.input,
               },
               inputComponent: PhoneMask,
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

Phone.propTypes = {
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
   onChange: PropTypes.func.isRequired,
   isValid: PropTypes.func.isRequired,
}

export default withStyles(styles)(Phone)
