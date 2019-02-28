import React, { Component } from 'react'
import './sass/main.scss'
import { Element } from 'react-scroll'
import Header from './components/Header'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Relationships from './components/Relationships/'
import Requirements from './components/Requirements'

class App extends Component {
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
         </div>
      )
   }
}

export default App
