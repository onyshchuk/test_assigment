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
})

class Phone extends Component {
   constructor(props) {
      super(props)

      this.inp = React.createRef()
      this.state = {
         textmask: '+38 (___) ___ __ __',
         cursorPosition: 4,
      }
   }
   handleChange = e => {
      const textmask = e.target.value
      let cursorPosition = textmask.slice(4).replace(/_| |\)/g, '').length + 4
      if (cursorPosition >= 8) cursorPosition += 2
      if (cursorPosition >= 13) cursorPosition++
      if (cursorPosition >= 16) cursorPosition++
      this.setState(prevState => ({ ...prevState, textmask, cursorPosition }))
   }
   setCaret = () => {
      window.setTimeout(() => {
         this.inp.current.selectionStart = this.state.cursorPosition
         this.inp.current.selectionEnd = this.state.cursorPosition
      }, 0)
   }
   render() {
      const { classes, className, ...rest } = this.props
      return (
         <TextField
            label="Phone"
            className={className}
            margin="normal"
            variant="outlined"
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
            value={this.state.textmask}
            onChange={this.handleChange}
            onFocus={this.setCaret}
            placeholder="+38 (___) ___ __ __"
            {...rest}
         />
      )
   }
}

Phone.propTypes = {
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
}

export default withStyles(styles)(Phone)
