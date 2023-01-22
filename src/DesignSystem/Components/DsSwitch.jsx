import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

class DsSwitch extends PureComponent {
  render () {
    const { value, handleChange, variants, ...restProps } = this.props
    return (
      <ToggleButtonGroup
        size='small'
        value={value && value.toLowerCase()}
        exclusive
        onChange={handleChange}
        {...restProps}
      >
        <ToggleButton value='yes' color='secondary'>
          <Typography variant='supportBoldTextButton'>YES</Typography>
        </ToggleButton>
        <ToggleButton value='no' size='inherit' color='secondary'>
          <Typography variant='supportBoldTextButton'>NO</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    )
  }
}

DsSwitch.propTypes = {}

export default DsSwitch
