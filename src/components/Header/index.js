import React from 'react'
import Navigation from './Navigation'
import UserWindow from './UserWindow'

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <img
               className="header__logo"
               src="./images/logo.svg"
               alt="avz.agency"
            />
            <Navigation />
            <UserWindow />
         </div>
      </header>
   )
}

export default Header
