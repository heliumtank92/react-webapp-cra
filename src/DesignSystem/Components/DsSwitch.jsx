import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

class DsSwitch extends PureComponent {
  static propTypes = {
    value: PropTypes.oneOf(['yes', 'no'])
  }

  static defaultProps = {
    value: 'no'
  }

  render () {
    const { value, ...restProps } = this.props
    return (
      <ToggleButtonGroup
        size='small'
        exclusive
        value={value && value.toLowerCase()}
        {...restProps}
      >
        <ToggleButton value='yes' size='inherit' color='secondary'>
          <Typography variant='supportBoldTextButton'>YES</Typography>
        </ToggleButton>
        <ToggleButton value='no' size='inherit' color='secondary'>
          <Typography variant='supportBoldTextButton'>NO</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    )
  }
}

export default DsSwitch
