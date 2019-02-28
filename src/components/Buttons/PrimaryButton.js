import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import variables from '../../sass/abstracts/_variables.scss'

const styles = () => ({
   button: {
      fontSize: '2rem',
      fontFamily: variables.fontPrimary,
      fontWeight: 700,
      lineHeight: 1.4,
      textTransform: 'none',
      boxShadow: 'none',
      backgroundColor: variables.colorPrimary,
      color: variables.colorGreyTwo,
      '&:hover': {
         backgroundColor: variables.colorPrimaryLighter,
      },
      '&:disabled': {
         backgroundColor: variables.colorGreyThree,
         color: variables.colorGreyFour,
      },
   },
})

const PrimaryButton = props => {
   const { classes, children, className, ...rest } = props
   return (
      <Button
         variant="contained"
         className={classNames(classes.button, className)}
         {...rest}
      >
         {children}
      </Button>
   )
}

PrimaryButton.propTypes = {
   classes: PropTypes.object.isRequired,
   children: PropTypes.node,
   className: PropTypes.string,
}

export default withStyles(styles)(PrimaryButton)
