import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import UserWindow from './UserWindow'
import SideDrawer from './SideDrawer'
import SVG from 'react-inlinesvg'
import axios from '../../axios'

class Header extends Component {
   constructor(props) {
      super(props)

      this.state = {
         drawerOpen: false,
         user: {
            name: '',
            email: '',
            photo: '',
         },
      }
   }

   componentDidMount() {
      axios.get('users/1').then(response => {
         // first char of email to uppercase
         let email = response.data.user.email
         email = email.charAt(0).toUpperCase() + email.slice(1)
         response.data.user.email = email
         this.setState({ user: response.data.user })
      })
   }

   toggleDrawer = () => {
      this.setState(prevState => ({
         drawerOpen: !prevState.drawerOpen,
      }))
   }

   render() {
      const { navMenu } = this.props.breakpoints
      return (
         <header className="header">
            <div className="container">
               <img
                  className="header__logo"
                  src="./images/logo.svg"
                  alt="avz.agency"
               />
               {this.props.screenWidth > navMenu ? (
                  <div>
                     <Navigation className="header__navigation" />
                     <UserWindow
                        className="user-window"
                        user={this.state.user}
                     />
                  </div>
               ) : (
                  <div
                     className="header__drawer-icon"
                     onClick={this.toggleDrawer}
                  >
                     <SVG src="./icons/line-menu.svg" />
                  </div>
               )}
            </div>
            {this.props.screenWidth < navMenu && (
               <SideDrawer
                  open={this.state.drawerOpen}
                  toggleDrawer={this.toggleDrawer}
                  user={this.state.user}
               />
            )}
         </header>
      )
   }
}

Header.propTypes = {
   screenWidth: PropTypes.number,
   breakpoints: PropTypes.object,
}

export default Header
