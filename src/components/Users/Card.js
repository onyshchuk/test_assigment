import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Truncate from 'react-truncate'

class Card extends Component {
   constructor(props) {
      super(props)
      this.card = React.createRef()
      this.state = {
         truncateWidth: 1000,
      }
   }

   componentDidMount() {
      const truncateWidth =
         this.card.current.clientWidth -
         this.card.current.firstElementChild.clientWidth -
         5
      this.setState({ truncateWidth })
   }
   render() {
      return (
         <div className={this.props.className} ref={this.card}>
            <img src={this.props.photo} alt={this.props.name} />
            <div className={this.props.className + '__info'}>
               <h4 className="heading-4">
                  <Truncate
                     lines={5}
                     width={this.state.truncateWidth}
                     ellipsis={<span>...</span>}
                  >
                     {this.props.name}
                  </Truncate>
               </h4>
               <p className="paragraph-3">
                  <Truncate
                     lines={5}
                     width={this.state.truncateWidth}
                     ellipsis={<span>...</span>}
                  >
                     {this.props.position}
                  </Truncate>
               </p>
               <p className="paragraph-3">
                  <Truncate
                     width={this.state.truncateWidth}
                     ellipsis={<span>...</span>}
                  >
                     {this.props.email}
                  </Truncate>
               </p>
               <p className="paragraph-3">
                  <Truncate
                     width={this.state.truncateWidth}
                     ellipsis={<span>...</span>}
                  >
                     {this.props.phone}
                  </Truncate>
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
}

export default Card
