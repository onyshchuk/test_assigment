import React, { Component } from 'react'
import Name from './Name'
import Email from './Email'
import Phone from './Phone'
import Position from './Position'
import UploadPhoto from './UploadPhoto'
import PrimaryButton from '../Buttons/PrimaryButton'

class From extends Component {
   state = {
      name: '',
      nameValid: false,
      email: '',
      emailValid: false,
      phone: '',
      phoneValid: false,
      position: '',
      positionValid: false,
      photo: '',
   }

   handleChange = stateName => e => {
      const value = e.target.value
      this.setState({ [stateName]: value })
   }

   isValid = stateName => valid => {
      this.setState({ [stateName]: valid })
   }

   render() {
      const buttonDisabled =
         !this.state.nameValid ||
         !this.state.emailValid ||
         !this.state.phoneValid ||
         !this.state.positionValid ||
         !this.state.photo

      return (
         <form className="form" noValidate autoComplete="off">
            <Name
               className="form__input form__input--name"
               value={this.state.name}
               onChange={this.handleChange('name')}
               isValid={this.isValid('nameValid')}
            />
            <Email
               className="form__input form__input--email"
               value={this.state.email}
               onChange={this.handleChange('email')}
               isValid={this.isValid('emailValid')}
            />
            <Phone
               className="form__input form__input--phone"
               phone={this.state.phone}
               onChange={this.handleChange('phone')}
               isValid={this.isValid('phoneValid')}
            />
            <Position
               className="form__select"
               value={this.state.position}
               onChange={this.handleChange('position')}
               isValid={this.isValid('positionValid')}
            />
            <UploadPhoto
               className="form__upload"
               onChange={this.handleChange('photo')}
            />
            <PrimaryButton className="form__submit" disabled={buttonDisabled}>
               Sign Up
            </PrimaryButton>
         </form>
      )
   }
}

export default From
