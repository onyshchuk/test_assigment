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
                     <a href="mailto:work.of.future@gmail.com">
                        <SVG
                           className="footer__contacts-icon footer__contacts-icon--email"
                           src="./icons/mail.svg"
                        />
                        <span className="footer__contacts-text">
                           work.of.future@gmail.com
                        </span>
                     </a>
                  </div>
                  <div className="footer__phone">
                     <a href="tel:+380507892498">
                        <SVG
                           className="footer__contacts-icon footer__contacts-icon--phone"
                           src="./icons/phone.svg"
                        />
                        <span className="footer__contacts-text">
                           +38 (050) 789 24 98
                        </span>
                     </a>
                  </div>
                  <div className="footer__cellphone">
                     <a href="tel:+380955560845">
                        <SVG
                           className="footer__contacts-icon footer__contacts-icon--cellphone"
                           src="./icons/cellphone.svg"
                        />
                        <span className="footer__contacts-text">
                           +38 (095) 556 08 45
                        </span>
                     </a>
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
            <div className="footer__copyright-social">
               <div className="footer__copyright">
                  &copy; abz.agency specially for the test task
               </div>
               <div className="footer__social">
                  <a href="#">
                     <SVG src="icons/facebook.svg" alt="facebook" />
                  </a>
                  <a href="#">
                     <SVG src="icons/linkedin.svg" alt="linkedin" />
                  </a>
                  <a href="#">
                     <SVG src="icons/instagram.svg" alt="instagram" />
                  </a>
                  <a href="#">
                     <SVG src="icons/twitter.svg" alt="twitter" />
                  </a>
                  <a href="#">
                     <SVG src="icons/pinterest.svg" alt="pinterest" />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
