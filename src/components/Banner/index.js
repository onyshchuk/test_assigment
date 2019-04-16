import React, { Component } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import ellipsize, { nodeEllipsize } from '../../utility/ellipsize'
import scrollToElement from '../../utility/scrollToElement'

class Banner extends Component {
   constructor(props) {
      super(props)
      this.headerID = 'bannerHeader'
      this.paragraphID = 'bannerParagraph'
      this.buttonID = 'bannerButton'
      this.screenWidth = 0
   }
   componentDidMount() {
      ellipsize(this.headerID)
      ellipsize(this.paragraphID)
      const button = document.getElementById(this.buttonID)
      nodeEllipsize(button.firstElementChild, button)
      this.screenWidth = window.screen.width
   }

   render() {
      return (
         <section className="section-banner">
            <div className="container">
               <h1 className="heading-1" id={this.headerID}>
                  Test assignment for Frontend Developer position
               </h1>
               <p id={this.paragraphID}>
                  We kindly remind you that your test assignment should
                  {this.screenWidth > 1170 && <br />} be submitted as a link to
                  github/bitbucket repository.
                  {this.screenWidth > 1170 && <br />} Please be patient, we
                  consider and respond to every application that meets minimum
                  requirements. We look forward to your submission. Good luck!
               </p>
               <PrimaryButton
                  variant="contained"
                  className="Button__primary"
                  id="bannerButton"
                  onClick={() => scrollToElement('signup')}
               >
                  Sign Up
               </PrimaryButton>
            </div>
         </section>
      )
   }
}

export default Banner
