import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ellipsize from '../../utility/ellipsize'

class Card extends Component {
   constructor(props) {
      super(props)

      this.paragraphID = 'relationshipCardParagraph' + this.props.idSuffix
   }
   componentDidMount() {
      ellipsize(this.paragraphID)
   }
   render() {
      return (
         <div className={this.props.className}>
            <img src={this.props.image} alt={this.props.title} />
            <h3 className="heading-3" title={this.props.title}>
               {this.props.title}
            </h3>
            <p id={this.paragraphID}>{this.props.content}</p>
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
}

export default Card
