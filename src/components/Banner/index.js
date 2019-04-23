import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PrimaryButton from '../Buttons/PrimaryButton'
import ellipsize, { nodeEllipsize } from '../../utility/ellipsize'
import scrollToElement from '../../utility/scrollToElement'

class Banner extends Component {
   constructor(props) {
      super(props)

      this.headerID = 'bannerHeader'
      this.paragraphID = 'bannerParagraph'
      this.buttonID = 'bannerButton'
   }

   componentDidMount() {
      ellipsize(this.headerID)
      ellipsize(this.paragraphID)
      const button = document.getElementById(this.buttonID)
      nodeEllipsize(button.firstElementChild, button)
   }

   render() {
      const { desktopTwoK, mobile } = this.props.breakpoints
      return (
         <section className="section-banner">
            <div className="container">
               <h1 className="heading-1" id={this.headerID}>
                  Test assignment for Frontend Developer position
               </h1>
               <p id={this.paragraphID}>
                  We kindly remind you that your test assignment should
                  {this.props.screenWidth > desktopTwoK && <br />} be submitted
                  as a link to github/bitbucket repository.
                  {this.props.screenWidth > desktopTwoK && <br />}
                  {this.props.screenWidth > mobile &&
                     ' Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!'}
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

Banner.propTypes = {
   screenWidth: PropTypes.number,
   breakpoints: PropTypes.object,
}

export default Banner
