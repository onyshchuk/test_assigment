import React, { Component } from 'react'
import Card from './Card'
import ellipsize from '../../utility/ellipsize'

class Relationships extends Component {
   constructor(props) {
      super(props)

      this.headerID = 'relationshipsHeader'
   }
   componentDidMount() {
      ellipsize(this.headerID)
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
                     content="Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications."
                  />
                  <Card
                     idSuffix="card-2"
                     className="relationships__card"
                     image="images/css.svg"
                     title="CSS is my best friend"
                     content={`Cascading Style Sheets (CSS)\nis a style sheet language used for describing the presentation of a document written in a markup language like HTML.`}
                  />
                  <Card
                     idSuffix="card-3"
                     className="relationships__card"
                     image="images/javascript.svg"
                     title="JavaScript is my passion"
                     content="JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
                  />
               </div>
            </div>
         </section>
      )
   }
}

export default Relationships
