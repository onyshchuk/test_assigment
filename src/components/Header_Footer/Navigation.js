import React from 'react'
import PropTypes from 'prop-types'
import scrollToElement from '../../utility/scrollToElement'

const Navigation = props => {
   return (
      <nav className={props.className}>
         <ul>
            <li>
               <a title="About me" onClick={() => scrollToElement('aboutMe')}>
                  About me
               </a>
            </li>
            <li>
               <a
                  title="Relationships"
                  onClick={() => scrollToElement('relationships')}
               >
                  Relationships
               </a>
            </li>
            <li>
               <a
                  title="Requirements"
                  onClick={() => scrollToElement('requirements')}
               >
                  Requirements
               </a>
            </li>
            <li>
               <a title="Users" onClick={() => scrollToElement('users')}>
                  Users
               </a>
            </li>
            <li>
               <a title="Sign Up" onClick={() => scrollToElement('signup')}>
                  Sign Up
               </a>
            </li>
            {props.drawer && (
               <li>
                  <a title="Sign Out">Sign Out</a>
               </li>
            )}
         </ul>
      </nav>
   )
}

Navigation.propTypes = {
   className: PropTypes.string,
   drawer: PropTypes.bool,
}

export default Navigation
