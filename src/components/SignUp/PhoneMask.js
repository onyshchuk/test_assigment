import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'

const PhoneMask = props => {
   const { inputRef, ...other } = props
   return (
      <MaskedInput
         {...other}
         ref={ref => {
            inputRef(ref ? ref.inputElement : null)
         }}
         mask={[
            '+',
            '3',
            '8',
            '(',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
         ]}
      />
   )
}

PhoneMask.propTypes = {
   inputRef: PropTypes.func.isRequired,
}

export default PhoneMask
