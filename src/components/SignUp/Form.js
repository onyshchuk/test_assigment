/* global FormData */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Name from './Name'
import Email from './Email'
import Phone from './Phone'
import Position from './Position'
import UploadPhoto from './UploadPhoto'
import PrimaryButton from '../Buttons/PrimaryButton'
import Modal from './Modal'

class Form extends Component {
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
   handleSubmit = e => {
      const formData = new FormData()
      formData.append('name', this.state.name)
      formData.append('email', this.state.email)
      formData.append('phone', this.state.phone)
      formData.append('position_id', this.state.position)
      formData.append('photo', this.state.photo)
      this.props.handleFormSubmit(e, formData)
   }
   render() {
      const buttonDisabled =
         !this.state.nameValid ||
         !this.state.emailValid ||
         !this.state.phoneValid ||
         !this.state.positionValid ||
         !this.state.photo

      return (
         <form
            className="form"
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}
         >
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
            <PrimaryButton
               type="submit"
               className="form__submit"
               disabled={buttonDisabled}
            >
               Sign Up
            </PrimaryButton>
            <Modal
               open={this.props.openModal}
               handleModalClose={this.props.handleModalClose}
            />
         </form>
      )
   }
}

Form.propTypes = {
   handleFormSubmit: PropTypes.func,
   openModal: PropTypes.bool,
   handleModalClose: PropTypes.func,
}

export default Form
