import React, { Component } from 'react'
import TextButton from '../Buttons/TextButton'
import ellipsize, { nodeEllipsize } from '../../utility/ellipsize'

class AboutMe extends Component {
   constructor(props) {
      super(props)

      this.paragraphID = 'aboutmeParagraph'
      this.buttonID = 'aboutmeButton'
   }
   componentDidMount() {
      const button = document.getElementById(this.buttonID)
      // here ellipsize function should be called asynchonous
      // (after all synchronus code) because <br /> block height
      // renders with some delay and scrollHeight is incorrect
      window.setTimeout(() => {
         ellipsize(this.paragraphID)
         nodeEllipsize(button.firstElementChild, button)
      }, 0)
   }
   componentDidUpdate() {}
   render() {
      return (
         <section className="section-aboutme">
            <div className="container">
               <h2 className="heading-2" title="Let's get acquainted">
                  Let&apos;s get acquainted
               </h2>
               <div className="aboutme__wrapper">
                  <img
                     src="./images/man-mobile.svg"
                     alt="Let's get acquainted"
                  />
                  <div>
                     <h3
                        className="heading-3"
                        title="I am cool frontend developer"
                     >
                        I am cool frontend developer
                     </h3>
                     <p id={this.paragraphID}>
                        When real users have a slow experience on mobile,
                        they&apos;re much less likely to find what they are
                        looking for or purchase from you in the future. For many
                        sites this equates to a huge missed opportunity,
                        especially when more than half of visits are abandoned
                        if a mobile page takes over 3 seconds to load. {<br />}
                        {<br />}
                        Last week, Google Search and Ads teams announced two new
                        speed initiatives to help improve user-experience on the
                        web.
                     </p>
                     <TextButton id={this.buttonID}>Sign Up</TextButton>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}

export default AboutMe
