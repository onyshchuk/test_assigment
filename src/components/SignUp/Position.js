import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import SVG from 'react-inlinesvg'
import variables from './../../sass/abstracts/_variables.scss'
import axios from '../../axios'

const styles = () => ({
   rootInput: {
      '&$focused $outline': {
         borderColor: 'grey',
      },
   },
   typography: {
      fontFamily: variables.fontPrimary,
      fontSize: '1.6rem',
   },
   input: {
      padding: '22px 16px 15px 16px',
   },
   focused: {
      $rootSelect: {
         backgroundColor: 'green',
      },
   },
   error: {
      '&$focused $outline': {
         borderColor: '#f44336',
      },
   },
   outline: {},
   icon: {
      position: 'absolute',
      top: 'calc(50% - 0.6rem)',
      right: '21px',
   },
   helperText: {
      color: '#f44336',
      fontFamily: variables.fontPrimary,
      fontSize: '1.2rem',
      margin: '6px 16px -18px',
      letterSpacing: '0.03px',
   },
   rootMenuItem: {
      '&:hover': {
         backgroundColor: variables.colorPrimaryLighter2 + ' !important',
      },
   },
   selectedMenuItem: {
      color: variables.colorPrimary,
      backgroundColor: '#fff !important',
   },
})

class Position extends Component {
   constructor(props) {
      super(props)

      this.state = {
         positions: [],
         error: '',
         open: false,
      }
   }

   componentDidMount() {
      axios.get('positions').then(response => {
         const positions = response.data.positions
         this.setState({ positions })
      })
   }

   handleClose = e => {
      let error = ''
      if (e.target.value === undefined && this.props.value === '')
         error = 'Position is required'
      this.props.isValid(!error)
      this.setState({ open: false, error })
   }

   render() {
      const {
         rootInput,
         typography,
         input,
         focused,
         error,
         outline,
         icon,
         helperText,
         rootMenuItem,
         selectedMenuItem,
      } = this.props.classes
      return (
         <FormControl variant="outlined" className={this.props.className}>
            <Select
               value={this.props.value}
               open={this.state.open}
               onOpen={() => this.setState({ open: true })}
               onClose={this.handleClose}
               onChange={this.props.onChange}
               error={!!this.state.error}
               input={
                  <OutlinedInput
                     labelWidth={0}
                     name="Position"
                     classes={{
                        root: rootInput,
                        input,
                        focused,
                        error,
                        notchedOutline: outline,
                     }}
                  />
               }
               displayEmpty
               classes={{ root: typography }}
               IconComponent={() => (
                  <SVG className={icon} src="icons/caret-down.svg" />
               )}
            >
               <MenuItem classes={{ root: typography }} value="" disabled>
                  Select your position
               </MenuItem>
               {this.state.positions.map(position => (
                  <MenuItem
                     key={position.id}
                     classes={{
                        root: classNames(rootMenuItem, typography),
                        selected: selectedMenuItem,
                     }}
                     value={position.id}
                  >
                     {position.name}
                  </MenuItem>
               ))}
            </Select>
            <FormHelperText classes={{ root: helperText }}>
               {this.state.error}
            </FormHelperText>
         </FormControl>
      )
   }
}

Position.propTypes = {
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
   onChange: PropTypes.func.isRequired,
   isValid: PropTypes.func.isRequired,
   value: PropTypes.string,
}

export default withStyles(styles)(Position)
