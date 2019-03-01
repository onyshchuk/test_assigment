import React, { Component } from 'react'
import axios from '../../axios'
import Card from './Card'

class Users extends Component {
   state = {
      users: [],
      next: null,
   }

   componentDidMount() {
      axios.get('users?page=3&count=6').then(response => {
         let next = response.data.links.next_url.split('/v1/')[1]
         let users = response.data.users.sort(
            (a, b) => b.registration_timestamp - a.registration_timestamp
         )
         this.setState({
            users,
            next,
         })
      })
   }

   render() {
      return (
         <section className="section-users">
            <div className="container">
               <h1 className="heading-2">Our cheerful users</h1>
               <p className="users__semiheading">
                  Attention! Sorting users by registration date
               </p>
               <div className="users__wrapper">
                  {this.state.users.map(user => (
                     <Card
                        key={user.id}
                        className="user-card"
                        name={user.name}
                        photo={user.photo}
                        position={user.position}
                        email={user.email}
                        phone={user.phone}
                     />
                  ))}
               </div>
            </div>
         </section>
      )
   }
}

export default Users
