import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Navigation from './Navigation'
import UserWindow from './UserWindow'

const styles = () => ({
   paper: {
      width: '26rem',
   },
})

const SideDrawer = props => {
   const { paper } = props.classes
   return (
      <Drawer
         classes={{ paper }}
         open={props.open}
         onClose={props.toggleDrawer}
      >
         <UserWindow
            className="drawer-user-window"
            drawer={true}
            user={props.user}
         />
         <Divider />
         <Navigation className="drawer-navigation" drawer={true} />
      </Drawer>
   )
}

SideDrawer.propTypes = {
   classes: PropTypes.object,
   open: PropTypes.bool,
   toggleDrawer: PropTypes.func.isRequired,
   user: PropTypes.object,
}

export default withStyles(styles)(SideDrawer)
