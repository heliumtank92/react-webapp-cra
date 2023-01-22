import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

class ErrorLabel extends Component {
  render () {
    const { helperText } = this.props
    return (
      <Box pt={1} display='flex' flexDirection='row'>
        <Box fontSize={16} pr={2} pl={1}>
          <InfoIcon color='error' fontSize='inherit' />
        </Box>
        <Typography variant='bodyRegularSmall' color='error'>
          {helperText}
        </Typography>
      </Box>
    )
  }
}

ErrorLabel.propTypes = {}

export default ErrorLabel
