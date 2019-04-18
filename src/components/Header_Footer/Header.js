import React, { Component } from 'react'
import Navigation from './Navigation'
import UserWindow from './UserWindow'
import SideDrawer from './SideDrawer'
import SVG from 'react-inlinesvg'
import throttle from 'lodash.throttle'
import axios from '../../axios'

class Header extends Component {
   constructor(props) {
      super(props)

      this.state = {
         drawerOpen: false,
         screenWidth: 0,
         user: {
            name: '',
            email: '',
            photo: '',
         },
      }
   }

   componentDidMount() {
      this.updateScreenWidth()()
      window.addEventListener('resize', this.updateScreenWidth())
      axios.get('users/1').then(response => {
         // first char of email to uppercase
         let email = response.data.user.email
         email = email.charAt(0).toUpperCase() + email.slice(1)
         response.data.user.email = email
         this.setState({ user: response.data.user })
      })
   }

   componentWillUnmount() {
      window.removeEventListener('resize', this.updateScreenWidth())
   }

   updateScreenWidth = () => {
      return throttle(() => {
         this.setState({ screenWidth: window.screen.width })
      }, 200)
   }

   toggleDrawer = () => {
      this.setState(prevState => ({
         drawerOpen: !prevState.drawerOpen,
      }))
   }

   render() {
      return (
         <header className="header">
            <div className="container">
               <img
                  className="header__logo"
                  src="./images/logo.svg"
                  alt="avz.agency"
               />
               {this.state.screenWidth > 1000 ? (
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
            {this.state.screenWidth < 1000 && (
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

export default Header
