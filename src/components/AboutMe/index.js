import React from 'react'
import TextButton from '../Buttons/TextButton'

const AboutMe = () => {
   return (
      <section className="section-aboutme">
         <div className="container">
            <h2 className="heading-2">Let&apos;s get acquainted</h2>
            <div className="aboutme__wrapper">
               <img src="./images/man-mobile.svg" alt="Let's get acquainted" />
               <div>
                  <h3 className="heading-3">I am cool frontend developer</h3>
                  <p>
                     When real users have a slow experience on mobile,
                     they&apos;re much less likely to find what they are looking
                     for or purchase from you in the future. For many sites this
                     equates to a huge missed opportunity, especially when more
                     than half of visits are abandoned if a mobile page takes
                     over 3 seconds to load. <br /> <br /> Last week, Google
                     Search and Ads teams announced two new speed initiatives to
                     help improve user-experience on the web.
                  </p>
                  <TextButton>Sign Up</TextButton>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutMe
