import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import variables from '../../sass/abstracts/_variables.scss'

const styles = () => ({
   button: {
      fontSize: '2.2rem',
      fontFamily: variables.fontPrimary,
      fontWeight: 700,
      lineHeight: 1.4,
      textTransform: 'none',
      boxShadow: 'none',
      color: variables.colorPrimary,
      padding: 0,
      '&:hover': {
         color: variables.colorPrimaryLighter,
      },
   },
})

const TextButton = props => {
   const { classes, children, className, ...rest } = props
   return (
      <Button className={classNames(classes.button, className)} {...rest}>
         {children}
      </Button>
   )
}

TextButton.propTypes = {
   classes: PropTypes.object.isRequired,
   children: PropTypes.node,
   className: PropTypes.string,
}

export default withStyles(styles)(TextButton)
