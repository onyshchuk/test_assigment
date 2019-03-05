import React, { Component } from 'react'
import Name from './Name'
import Email from './Email'
import Phone from './Phone'
import Position from './Position'
import UploadPhoto from './UploadPhoto'

class From extends Component {
   render() {
      return (
         <form className="form" noValidate autoComplete="off">
            <Name
               className="form__input form__input--name"
               // value={this.state.name}
               // onChange={this.handleChange('name')}
            />
            <Email
               className="form__input form__input--email"
               placeholder="Your email"

               // value={this.state.name}
               // onChange={this.handleChange('name')}
            />
            <Phone
               className="form__input form__input--phone"
               // value={this.state.name}
               // onChange={this.handleChange('name')}
            />
            <Position className="form__select" />
            <UploadPhoto className="form__upload" />
         </form>
      )
   }
}

export default From
