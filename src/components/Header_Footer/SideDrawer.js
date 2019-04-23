import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Navigation from './Navigation'
import UserWindow from './UserWindow'

const SideDrawer = props => {
   return (
      <Drawer
         classes={{ paper: 'drawer-user-window__paper' }}
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

export default SideDrawer
