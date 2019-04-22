import React, { Component } from 'react'
import Card from './Card'
import ellipsize from '../../utility/ellipsize'
import throttle from 'lodash.throttle'

class Relationships extends Component {
   constructor(props) {
      super(props)

      this.state = { screenWidth: 0 }

      this.headerID = 'relationshipsHeader'
      this.desktopTwoK = 1200
      this.tablet = 900
      this.tabletMin = 710
      this.mobile = 600
   }

   componentDidMount() {
      ellipsize(this.headerID)
      this.updateScreenWidth()()
      window.addEventListener('resize', this.updateScreenWidth())
   }

   componentWillUnmount() {
      window.removeEventListener('resize', this.updateScreenWidth())
   }

   updateScreenWidth = () => {
      return throttle(() => {
         this.setState({ screenWidth: window.screen.width })
      }, 200)
   }

   render() {
      return (
         <section className="section-relationships">
            <div className="container">
               <h2 className="heading-2" id={this.headerID}>
                  About my relationships with web-development
               </h2>
               <div className="relationships__wrapper">
                  <Card
                     idSuffix="card-1"
                     className="relationships__card"
                     image="images/html.svg"
                     title="I'm in love with HTML"
                     content={`Hypertext Markup Language (HTML) ${
                        this.state.screenWidth <= this.mobile ? '\n' : ''
                     }is the standard markup language for creating web pages and web applications.`}
                     screenWidth={this.state.screenWidth}
                  />
                  <Card
                     idSuffix="card-2"
                     className="relationships__card"
                     image="images/css.svg"
                     title="CSS is my best friend"
                     content={`Cascading Style Sheets (CSS) ${
                        this.state.screenWidth < this.desktopTwoK &&
                        this.state.screenwidth > this.tablet
                           ? '\n'
                           : ''
                     }is a style sheet language used for describing the presentation of a document written in a markup language like HTML.`}
                     screenWidth={this.state.screenWidth}
                  />
                  <Card
                     idSuffix="card-3"
                     className="relationships__card"
                     image="images/javascript.svg"
                     title="JavaScript is my passion"
                     content={`JavaScript is a high-level, interpreted programming language.${
                        this.state.screenWidth < this.tablet &&
                        this.state.screenWidth > this.tabletMin
                           ? '\n'
                           : ''
                     } It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.`}
                     screenWidth={this.state.screenWidth}
                  />
               </div>
            </div>
         </section>
      )
   }
}

export default Relationships
