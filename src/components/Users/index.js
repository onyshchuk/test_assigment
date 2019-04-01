import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import SecondaryButton from '../Buttons/SecondaryButton'
import { nodeEllipsize } from '../../utility/ellipsize'

class Users extends Component {
   constructor(props) {
      super(props)

      this.buttonID = 'usersButton'
   }
   componentDidMount() {
      const button = document.getElementById(this.buttonID)
      if (button) nodeEllipsize(button.firstElementChild, button)
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
                  {this.props.users.map(user => (
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
               {this.props.next ? (
                  <SecondaryButton
                     id={this.buttonID}
                     onClick={this.props.handleUsersClick}
                     className="users__button"
                  >
                     Show more
                  </SecondaryButton>
               ) : (
                  false
               )}
            </div>
         </section>
      )
   }
}

Users.propTypes = {
   users: PropTypes.array,
   next: PropTypes.string,
   handleUsersClick: PropTypes.func,
}

export default Users
