import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'

const Banner = () => {
   return (
      <section className="section-banner">
         <div className="container">
            <h1 className="heading-1">
               Test assignment for Frontend Developer position
            </h1>
            <p>
               We kindly remind you that your test assignment should be
               submitted as a link to github/bitbucket repository. Please be
               patient, we consider and respond to every application that meets
               minimum requirements. We look forward to your submission. Good
               luck!
            </p>
            <PrimaryButton variant="contained" className="Button__primary">
               Sign Up
            </PrimaryButton>
         </div>
      </section>
   )
}

export default Banner
