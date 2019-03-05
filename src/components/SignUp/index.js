import React from 'react'
import Form from './From'

const SignUp = () => {
   return (
      <section className="section-signup">
         <div className="container">
            <h2 className="heading-2">Register to get a work</h2>
            <p className="signup__semiheading paragraph-1">
               Attention! After successful registration and alert, update the
               list of users in the block from the top
            </p>
            <Form />
         </div>
      </section>
   )
}

export default SignUp
