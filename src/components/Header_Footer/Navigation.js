import React from 'react'
import PropTypes from 'prop-types'

const Navigation = props => {
   return (
      <nav className={props.className}>
         <ul>
            <li>
               <a href="#" title="About me">
                  About me
               </a>
            </li>
            <li>
               <a href="#" title="Relationships">
                  Relationships
               </a>
            </li>
            <li>
               <a href="#" title="Requirements">
                  Requirements
               </a>
            </li>
            <li>
               <a href="#" title="Users">
                  Users
               </a>
            </li>
            <li>
               <a href="#" title="Sign Up">
                  Sign Up
               </a>
            </li>
         </ul>
      </nav>
   )
}

Navigation.propTypes = {
   className: PropTypes.string,
}

export default Navigation
