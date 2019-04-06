import React, { Component } from 'react'
import './sass/main.scss'
import { Element } from 'react-scroll'
import Header from './components/Header_Footer/Header'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Relationships from './components/Relationships/'
import Requirements from './components/Requirements'
import Users from './components/Users'
import SignUp from './components/SignUp/'
import Footer from './components/Header_Footer/Footer'
import axios from './axios'

class App extends Component {
   constructor(props) {
      super(props)

      this.state = {
         users: [],
         next: null,
         openModal: true,
      }
   }
   loadFirstUsersPage() {
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
   }
   componentDidMount() {
      this.loadFirstUsersPage()
   }
   handleUsersClick = () => {
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
         })
      }
   }
   handleFormSubmit = (e, formData) => {
      e.preventDefault()

      axios
         .get('token')
         .then(response => {
            const token = response.data.token
            return axios.post('users', formData, {
               headers: { Token: token },
            })
         })
         .then(response => {
            if (response.data.success) {
               this.loadFirstUsersPage()
               this.setState({ openModal: true })
            }
         })
   }
   handleModalClose = () => {
      this.setState({ openModal: false })
   }
   render() {
      return (
         <div className="App">
            <Header />
            <Element name="banner">
               <Banner />
            </Element>
            <Element name="aboutMe">
               <AboutMe />
            </Element>
            <Element name="relationships">
               <Relationships />
            </Element>
            <Element name="requirements">
               <Requirements />
            </Element>
            <Element name="users">
               <Users
                  users={this.state.users}
                  next={this.state.next}
                  handleUsersClick={this.handleUsersClick}
               />
            </Element>
            <Element name="signup">
               <SignUp
                  handleFormSubmit={this.handleFormSubmit}
                  openModal={this.state.openModal}
                  handleModalClose={this.handleModalClose}
               />
            </Element>
            <Footer />
         </div>
      )
   }
}

export default App
