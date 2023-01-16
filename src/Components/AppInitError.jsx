import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import dsSpacing from 'src/DesignSystem/Theme/spacing'

export default class AppInitError extends PureComponent {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  render() {
    return (
      <Stack spacing={dsSpacing.mild}>
        <Typography>Something Went Wrong! Please Try Again</Typography>
        <Button onClick={this.props.initialize}>Retry</Button>
      </Stack>
    )
  }
}
