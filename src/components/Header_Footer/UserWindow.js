import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'

const UserWindow = props => {
   const { name, email, photo } = props.user
   return (
      <div className={props.className}>
         {props.drawer && (
            <img
               className={props.className + '__photo'}
               src={photo}
               alt={name}
            />
         )}
         <div className={props.className + '__wrapper'}>
            <div className={props.className + '__name'} title={name}>
               {name}
            </div>
            <div className={props.className + '__email'} title={email}>
               {email}
            </div>
         </div>

         {!props.drawer && (
            <div className={props.className + '__photo-signout'}>
               <img
                  className={props.className + '__photo'}
                  src={photo}
                  alt={name}
               />
               <a
                  href="#"
                  aria-label="sign-out"
                  className={props.className + '__signout'}
               >
                  <SVG src="icons/sign-out.svg" />
               </a>
            </div>
         )}
      </div>
   )
}

UserWindow.propTypes = {
   className: PropTypes.string,
   drawer: PropTypes.bool,
   user: PropTypes.object,
}

export default UserWindow
