import React, { Component } from 'react'
import axios from '../../axios'
import Card from './Card'
import SecondaryButton from '../Buttons/SecondaryButton'
import { nodeEllipsize } from '../../utility/ellipsize'

class Users extends Component {
   constructor(props) {
      super(props)

      this.state = {
         users: [],
         next: null,
         disabled: false,
      }

      this.buttonID = 'usersButton'
   }

   componentDidMount() {
      axios.get('users?page=1&count=6').then(response => {
         let next = response.data.links.next_url.split('/v1/')[1]
         let users = response.data.users.sort(
            (a, b) => b.registration_timestamp - a.registration_timestamp
         )
         this.setState({
            users,
            next,
         })
      })
      const button = document.getElementById(this.buttonID)
      nodeEllipsize(button.firstElementChild, button)
   }

   handleClick = () => {
      if (this.state.next) {
         axios.get(this.state.next).then(response => {
            let nextLink = response.data.links.next_url
            let next =
               nextLink === null
                  ? null
                  : response.data.links.next_url.split('/v1/')[1]
            let newUsers = response.data.users.sort(
               (a, b) => b.registration_timestamp - a.registration_timestamp
            )
            this.setState(({ users }) => ({
               users: [...users, ...newUsers],
               next,
            }))
            if (!this.state.next) {
               this.setState({ disabled: true })
            }
         })
      }
   }

   render() {
      return (
         <section className="section-users">
            <div className="container">
               <h1 className="heading-2" title="Our cheerful users">
                  Our cheerful users
               </h1>
               <p
                  className="users__semiheading"
                  title="Attention! Sorting users by registration date"
               >
                  Attention! Sorting users by registration date
               </p>
               <div className="users__wrapper">
                  {this.state.users.map(user => (
                     <Card
                        key={user.id}
                        idSuffix={user.id}
                        className="user-card"
                        name={user.name}
                        photo={user.photo}
                        position={user.position}
                        email={user.email}
                        phone={user.phone}
                     />
                  ))}
               </div>
               {this.state.disabled ? (
                  false
               ) : (
                  <SecondaryButton
                     id={this.buttonID}
                     onClick={this.handleClick}
                     className="users__button"
                  >
                     Show more
                  </SecondaryButton>
               )}
            </div>
         </section>
      )
   }
}

export default Users
