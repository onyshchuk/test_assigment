import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ellipsize from '../../utility/ellipsize'

class Card extends Component {
   constructor(props) {
      super(props)

      this.headerID = 'relationshipCardHeader' + this.props.idSuffix
      this.paragraphID = 'relationshipCardParagraph' + this.props.idSuffix
      this.desktopTwoK = 1200
      this.tablet = 900
   }
   componentDidMount() {
      window.setTimeout(() => {
         ellipsize(this.paragraphID)
         const { desktopTwoK, tablet } = this.props.breakpoints
         if (
            this.props.screenWidth < desktopTwoK &&
            this.props.screenWidth > tablet
         ) {
            ellipsize(this.headerID)
         }
      }, 0)
   }
   render() {
      return (
         <div className={this.props.className}>
            <img src={this.props.image} alt={this.props.title} />
            <div className={this.props.className + '-wrapper'}>
               <h3
                  id={this.headerID}
                  className="heading-3"
                  title={this.props.title}
               >
                  {this.props.title}
               </h3>
               <p id={this.paragraphID}>{this.props.content}</p>
            </div>
         </div>
      )
   }
}

Card.propTypes = {
   image: PropTypes.string,
   title: PropTypes.string,
   content: PropTypes.string,
   className: PropTypes.string,
   idSuffix: PropTypes.string,
   screenWidth: PropTypes.number,
   breakpoints: PropTypes.object,
}

export default Card
