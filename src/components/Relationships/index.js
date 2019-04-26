import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import ellipsize from '../../utility/ellipsize'

class Relationships extends Component {
   constructor(props) {
      super(props)

      this.headerID = 'relationshipsHeader'
   }

   componentDidMount() {
      window.setTimeout(() => {
         ellipsize(this.headerID)
      })
   }

   render() {
      const { desktopTwoK, tablet, tabMin, mobile } = this.props.breakpoints
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
                        this.props.screenWidth <= mobile ? '\n' : ''
                     }is the standard markup language for creating web pages and web applications.`}
                     screenWidth={this.props.screenWidth}
                     breakpoints={this.props.breakpoints}
                  />
                  <Card
                     idSuffix="card-2"
                     className="relationships__card"
                     image="images/css.svg"
                     title="CSS is my best friend"
                     content={`Cascading Style Sheets (CSS) ${
                        this.props.screenWidth < desktopTwoK &&
                        this.props.screenWidth > tablet
                           ? '\n'
                           : ''
                     }is a style sheet language used for describing the presentation of a document written in a markup language like HTML.`}
                     screenWidth={this.props.screenWidth}
                     breakpoints={this.props.breakpoints}
                  />
                  <Card
                     idSuffix="card-3"
                     className="relationships__card"
                     image="images/javascript.svg"
                     title="JavaScript is my passion"
                     content={`JavaScript is a high-level, interpreted programming language.${
                        this.props.screenWidth < tablet &&
                        // here ist better to make changes starting from 710px width
                        this.props.screenWidth > tabMin + 10
                           ? '\n'
                           : ''
                     } It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.`}
                     screenWidth={this.props.screenWidth}
                     breakpoints={this.props.breakpoints}
                  />
               </div>
            </div>
         </section>
      )
   }
}

Relationships.propTypes = {
   screenWidth: PropTypes.number,
   breakpoints: PropTypes.object,
}

export default Relationships
