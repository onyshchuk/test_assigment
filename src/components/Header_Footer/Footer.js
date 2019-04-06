import React from 'react'
import Navigation from './Navigation'
import SVG from 'react-inlinesvg'

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__logo-nav">
               <SVG className="footer__logo" src="images/logo.svg" />
               <Navigation className="footer__navigation" />
            </div>
            <div className="footer__contacts-links">
               <div className="footer__contacts">
                  <div className="footer__email">
                     <div className="footer__contscts-icon footer__contscts-icon--mail" />
                     <span>work.of.future@gmail.com</span>
                  </div>
                  <div className="footer__phone">
                     <div className="footer__contscts-icon footer__contscts-icon--phone" />
                     <span>+38 (050) 789 24 98</span>
                  </div>
                  <div className="footer__cellphone">
                     <div className="footer__contscts-icon footer__contscts-icon--cellphone" />
                     <span>+38 (095) 556 08 45</span>
                  </div>
               </div>
               <div className="footer__links">
                  <table>
                     <tbody>
                        <tr>
                           <td>
                              <a href="#">News</a>
                           </td>
                           <td>
                              <a href="#">Overview</a>
                           </td>
                           <td>
                              <a href="#">Tutorials</a>
                           </td>
                           <td>
                              <a href="#">FAQ</a>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <a href="#">Blog</a>
                           </td>
                           <td>
                              <a href="#">Design</a>
                           </td>
                           <td>
                              <a href="#">Resources</a>
                           </td>
                           <td>
                              <a href="#">Terms</a>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <a href="#">Partners</a>
                           </td>
                           <td>
                              <a href="#">Code</a>
                           </td>
                           <td>
                              <a href="#">Guides</a>
                           </td>
                           <td>
                              <a href="#">Conditions</a>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <a href="#">Shop</a>
                           </td>
                           <td>
                              <a href="#">Collaborate</a>
                           </td>
                           <td>
                              <a href="#">Examples</a>
                           </td>
                           <td>
                              <a href="#">Help</a>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div>
               <div className="footer__copyright">
                  &copy; abz.agency specially for the test task
               </div>
               <div className="footer__social">
                  <a href="#">
                     <img src="icons/facebook.svg" alt="facebook" />
                  </a>
                  <a href="#">
                     <img src="icons/linkedin.svg" alt="linkedin" />
                  </a>
                  <a href="#">
                     <img src="icons/instagram.svg" alt="instagram" />
                  </a>
                  <a href="#">
                     <img src="icons/twitter.svg" alt="twitter" />
                  </a>
                  <a href="#">
                     <img src="icons/pinterest.svg" alt="pinterest" />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
