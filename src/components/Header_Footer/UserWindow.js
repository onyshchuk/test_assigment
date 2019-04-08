import React, { Component } from 'react'
import SVG from 'react-inlinesvg'
import axios from '../../axios'

class UserWindow extends Component {
   state = {
      name: '',
      email: '',
      photo: '',
   }

   componentDidMount() {
      axios.get('users/1').then(response => {
         // first char of email to uppercase
         let email = response.data.user.email
         email = email.charAt(0).toUpperCase() + email.slice(1)
         this.setState({
            name: response.data.user.name,
            email,
            photo: response.data.user.photo,
         })
      })
   }

   render() {
      return (
         <div className="user-window">
            <div className="user-window__wrapper">
               <div className="user-window__name" title={this.state.name}>
                  {this.state.name}
               </div>
               <div className="user-window__email" title={this.state.email}>
                  {this.state.email}
               </div>
            </div>
            <img
               className="user-window__photo"
               src={this.state.photo}
               alt={this.state.name}
            />
            <a href="#" className="user-window__signout">
               <SVG src="icons/sign-out.svg" />
            </a>
         </div>
      )
   }
}

export default UserWindow
