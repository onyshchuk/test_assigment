import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ellipsize from '../../utility/ellipsize'

class Card extends Component {
   constructor(props) {
      super(props)

      this.nameID = 'userName' + this.props.idSuffix
      this.positionID = 'userPosition' + this.props.idSuffix
   }

   componentDidMount() {
      window.setTimeout(() => {
         ellipsize(this.nameID)
         ellipsize(this.positionID)
      }, 0)
   }

   addDefaultSrc = e => {
      e.target.src = '/icons/cover-icon-user.svg'
   }

   render() {
      return (
         <div className={this.props.className} ref={this.card}>
            <img
               onError={this.addDefaultSrc}
               src={this.props.photo}
               alt={this.props.name}
            />
            <div className={this.props.className + '__info'}>
               <h4 className="heading-4" id={this.nameID}>
                  {this.props.name}
               </h4>
               <p className="paragraph-3" id={this.positionID}>
                  {this.props.position}
               </p>
               <p className="paragraph-3" title={this.props.email}>
                  {this.props.email}
               </p>
               <p className="paragraph-3" title={this.props.phone}>
                  {this.props.phone}
               </p>
            </div>
         </div>
      )
   }
}

Card.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string,
   photo: PropTypes.string,
   position: PropTypes.string,
   email: PropTypes.string,
   phone: PropTypes.string,
   idSuffix: PropTypes.string,
}

export default Card
