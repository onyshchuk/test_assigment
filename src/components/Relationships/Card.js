import React from 'react'
import PropTypes from 'prop-types'

const Card = props => {
   return (
      <div className={props.className}>
         <img src={props.image} alt={props.title} />
         <h3 className="heading-3">{props.title}</h3>
         <p>{props.content}</p>
      </div>
   )
}

Card.propTypes = {
   image: PropTypes.string,
   title: PropTypes.string,
   content: PropTypes.string,
   className: PropTypes.string,
}

export default Card
