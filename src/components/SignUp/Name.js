import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
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

const Name = props => {
   const { classes, className, ...rest } = props
   return (
      <TextField
         label="Name"
         className={className}
         placeholder="Your name"
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

Name.propTypes = {
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
}

export default withStyles(styles)(Name)
