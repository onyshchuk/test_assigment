import React from 'react'
import PropTypes from 'prop-types'
import Form from './Form'

const SignUp = props => {
   const { mobile } = props.breakpoints
   return (
      <section className="section-signup">
         <div className="container">
            <h2 className="heading-2">Register to get a work</h2>
            <p className="signup__semiheading paragraph-1">
               Attention! After successful registration and alert, update the
               list of users{props.screenWidth <= mobile ? <br /> : ' '}in the
               block from the top
            </p>
            <Form
               handleFormSubmit={props.handleFormSubmit}
               openModal={props.openModal}
               handleModalClose={props.handleModalClose}
               screenWidth={props.screenWidth}
               breakpoints={props.breakpoints}
            />
         </div>
      </section>
   )
}

SignUp.propTypes = {
   handleFormSubmit: PropTypes.func,
   openModal: PropTypes.bool,
   handleModalClose: PropTypes.func,
   screenWidth: PropTypes.number,
   breakpoints: PropTypes.object,
}

export default SignUp
