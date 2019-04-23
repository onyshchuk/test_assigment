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
import throttle from 'lodash.throttle'

class App extends Component {
   constructor(props) {
      super(props)

      this.state = {
         users: [],
         next: null,
         openModal: false,
         screenWidth: 0,
      }

      this.breakpoints = {
         desktopTwoK: 1200,
         navMenu: 1000,
         tablet: 900,
         tabMin: 700,
         mobile: 600,
      }
   }

   componentDidMount() {
      this.updateScreenWidth()()
      window.addEventListener('resize', this.updateScreenWidth())
      window.setTimeout(() => {
         this.loadFirstUsersPage()
      }, 0)
   }

   componentWillUnmount() {
      window.removeEventListener('resize', this.updateScreenWidth())
   }

   updateScreenWidth = () => {
      return throttle(() => {
         this.setState({ screenWidth: window.screen.width })
      }, 200)
   }

   loadFirstUsersPage() {
      let count = this.state.screenWidth <= 600 ? 3 : 6
      axios.get('users?page=1&count=' + count).then(response => {
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
            <Header
               screenWidth={this.state.screenWidth}
               breakpoints={this.breakpoints}
            />
            <Element name="banner">
               <Banner
                  screenWidth={this.state.screenWidth}
                  breakpoints={this.breakpoints}
               />
            </Element>
            <Element name="aboutMe">
               <AboutMe
                  screenWidth={this.state.screenWidth}
                  breakpoints={this.breakpoints}
               />
            </Element>
            <Element name="relationships">
               <Relationships
                  screenWidth={this.state.screenWidth}
                  breakpoints={this.breakpoints}
               />
            </Element>
            <Element name="requirements">
               <Requirements
                  screenWidth={this.state.screenWidth}
                  breakpoints={this.breakpoints}
               />
            </Element>
            <Element name="users">
               <Users
                  users={this.state.users}
                  next={this.state.next}
                  handleUsersClick={this.handleUsersClick}
                  screenWidth={this.state.screenWidth}
                  breakpoints={this.breakpoints}
               />
            </Element>
            <Element name="signup">
               <SignUp
                  handleFormSubmit={this.handleFormSubmit}
                  openModal={this.state.openModal}
                  handleModalClose={this.handleModalClose}
                  screenWidth={this.state.screenWidth}
                  breakpoints={this.breakpoints}
               />
            </Element>
            <Footer />
         </div>
      )
   }
}

export default App
