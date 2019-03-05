import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import variables from './../../sass/abstracts/_variables.scss'
import axios from '../../axios'

const styles = () => ({
   typography: {
      fontFamily: variables.fontPrimary,
      fontSize: '1.6rem',
   },
   input: {
      padding: '22px 16px 15px 16px',
   },
   icon: {
      fontSize: '4.8rem',
      top: 'calc(50% - 2.4rem)',
      right: '5px',
   },
})

class Position extends Component {
   constructor(props) {
      super(props)

      this.state = {
         positions: [],
         position: '',
      }
   }
   componentDidMount() {
      axios.get('positions').then(response => {
         const positions = response.data.positions
         this.setState({ positions })
      })
   }
   handleChange = e => {
      const position = e.target.value
      this.setState({ position })
   }
   render() {
      const { typography, input, icon } = this.props.classes
      return (
         <FormControl variant="outlined" className={this.props.className}>
            <Select
               value={this.state.position}
               onChange={this.handleChange}
               input={
                  <OutlinedInput
                     labelWidth={0}
                     name="Position"
                     classes={{ input }}
                  />
               }
               displayEmpty
               classes={{ root: typography, icon }}
            >
               <MenuItem classes={{ root: typography }} value="" disabled>
                  Select your position
               </MenuItem>
               {this.state.positions.map(position => (
                  <MenuItem
                     key={position.id}
                     classes={{ root: typography }}
                     value={position.name}
                  >
                     {position.name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      )
   }
}

Position.propTypes = {
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
}

export default withStyles(styles)(Position)
