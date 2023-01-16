import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from '@mui/material'
import { Stack } from '@mui/system'
import { withSnackbar } from 'notistack'
import { buildEnqueueSnackbarProps } from '../Components/DsNotistackAlert'

class ExamplesNotification extends PureComponent {
  constructor (props) {
    super(props)

    this.enqueueNotification = this.enqueueNotification.bind(this)
  }

  enqueueNotification (severity, variant) {
    const { enqueueSnackbar } = this.props
    const notification = {
      message: `Sample message of ${variant} - ${severity} severity`,
      severity,
      variant
    }
    enqueueSnackbar(...buildEnqueueSnackbarProps(notification))
  }

  render () {
    return (
      <Grid direction='column' container spacing={2}>
        <Grid item>
          <Stack direction='row' spacing={2}>
            <Button onClick={() => { this.enqueueNotification('default', 'filled') }}>Default Filled</Button>
            <Button onClick={() => { this.enqueueNotification('info', 'filled') }}>Info Filled</Button>
            <Button onClick={() => { this.enqueueNotification('success', 'filled') }}>Success Filled</Button>
            <Button onClick={() => { this.enqueueNotification('error', 'filled') }}>Error Filled</Button>
            <Button onClick={() => { this.enqueueNotification('warning', 'filled') }}>Warning Filled</Button>
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction='row' spacing={2}>
            <Button onClick={() => { this.enqueueNotification('default', 'outlined') }}>Default Outlined</Button>
            <Button onClick={() => { this.enqueueNotification('info', 'outlined') }}>Info Outlined</Button>
            <Button onClick={() => { this.enqueueNotification('success', 'outlined') }}>Success Outlined</Button>
            <Button onClick={() => { this.enqueueNotification('error', 'outlined') }}>Error Outlined</Button>
            <Button onClick={() => { this.enqueueNotification('warning', 'outlined') }}>Warning Outlined</Button>
          </Stack>
        </Grid>
      </Grid>
    )
  }
}

export default withSnackbar(ExamplesNotification)
