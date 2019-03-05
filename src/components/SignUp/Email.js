import React from 'react'
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
})

const Email = props => {
   const { classes, className, ...rest } = props
   return (
      <TextField
         label="Email"
         className={className}
         placeholder="Your Email"
         name="email"
         type="email"
         autoComplete="email"
         margin="normal"
         variant="outlined"
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
         {...rest}
      />
   )
}

Email.propTypes = {
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
}

export default withStyles(styles)(Email)
