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
      backgroundColor: variables.colorwhite,
      color: variables.colorPrimary,
      border: '2px solid',
      borderColor: variables.colorPrimary,
      '&:hover': {
         Color: variables.colorPrimaryLighter,
         backgroundColor: variables.colorPrimaryLighter1,
         borderColor: variables.colorPrimaryLighter,
      },
      '&:disabled': {
         backgroundColor: variables.colorGreyThree,
         color: variables.colorGreyFour,
         border: 'transparent',

         '&:hover': {
            backgroundColor: variables.colorGreyThree,
         },
      },
   },
})

const SecondaryButton = props => {
   const { classes, children, className, ...rest } = props
   return (
      <Button
         variant="outlined"
         className={classNames(classes.button, className)}
         {...rest}
      >
         {children}
      </Button>
   )
}

SecondaryButton.propTypes = {
   classes: PropTypes.object.isRequired,
   children: PropTypes.node,
   className: PropTypes.string,
}

export default withStyles(styles)(SecondaryButton)
