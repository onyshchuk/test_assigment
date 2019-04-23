import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ellipsize from '../../utility/ellipsize'

class Requirements extends Component {
   constructor(props) {
      super(props)

      this.paragraphID = 'requirementsParagraph'
      this.headerID = 'requirementsHeader'
   }

   componentDidMount() {
      window.setTimeout(() => {
         ellipsize(this.paragraphID)
         if (this.props.screenWidth < this.props.breakpoints.tablet)
            ellipsize(this.headerID)
      }, 0)
   }

   render() {
      const { tablet, tabMin } = this.props.breakpoints
      return (
         <section className="section-requirements">
            <div className="container">
               <h2
                  id={this.headerID}
                  className="heading-2"
                  title="General requirements for the test task"
               >
                  General requirements for the test task
               </h2>
               <div className="requirements__wrapper">
                  <p id={this.paragraphID}>
                     Users want to find answers to their questions quickly and
                     data shows that people really care about how quickly their
                     pages load. The Search team announced speed would be a
                     ranking signal for desktop searches in 2010 and as of this
                     month (July 2018), page speed will be a ranking factor for
                     mobile searches too. <br />
                     <br />
                     If you&apos;re a developer working on a site, now is a good
                     time to evaluate your performance using our speed tools.
                     Think about how performance affects the user experience of
                     your pages and consider measuring a variety of
                     real&#8209;world user&#8209;centric performance metrics.
                     <br />
                     <br />
                     Are you shipping too much JavaScript? Too many images?
                     Images and JavaScript are the most significant contributors
                     to the page weight that affect page load time based on data
                     from HTTP Archive and the Chrome User Experience Report -
                     our public dataset for key UX metrics as experienced by
                     Chrome users under real&#8209;world conditions.
                  </p>
                  {this.props.screenWidth > tablet ||
                  this.props.screenWidth <= tabMin ? (
                     <img
                        src="images/man-laptop-v1.svg"
                        alt="general requirements for this task"
                     />
                  ) : (
                     <img
                        src="images/man-laptop-v2.svg"
                        alt="general requirements for this task"
                     />
                  )}
               </div>
            </div>
         </section>
      )
   }
}

Requirements.propTypes = {
   screenWidth: PropTypes.number,
   breakpoints: PropTypes.object,
}

export default Requirements
