import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { Grid, Alert } from '@mui/material'

class ExamplesAlerts extends PureComponent {
  render () {
    return (
      <Grid direction='column' container spacing={4}>
        <Grid container direction='row' item spacing={4}>
          <Grid item xs={7}>
            <Alert variant='filled' severity='error'>
              This is an error alert — check it out!
            </Alert>
          </Grid>
          <Grid item xs={7}>
            <Alert variant='filled' severity='warning'>
              This is a warning alert — check it out!
            </Alert>
          </Grid>
          <Grid item xs={7}>
            <Alert variant='filled' severity='info'>
              This is an info alert — check it out!
            </Alert>
          </Grid>
          <Grid item xs={7}>
            <Alert variant='filled' severity='success'>
              This is a success alert — check it out!
            </Alert>
          </Grid>
        </Grid>
        <Grid container direction='row' item spacing={4}>
          <Grid item xs={7}>
            <Alert variant='outlined' severity='error'>
              This is an error alert — check it out!
            </Alert>
          </Grid>
          <Grid item xs={7}>
            <Alert variant='outlined' severity='warning'>
              This is a warning alert — check it out!
            </Alert>
          </Grid>
          <Grid item xs={7}>
            <Alert variant='outlined' severity='info'>
              This is an info alert — check it out!
            </Alert>
          </Grid>
          <Grid item xs={7}>
            <Alert variant='outlined' severity='success'>
              This is a success alert — check it out!
            </Alert>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default ExamplesAlerts

ExamplesAlerts.propTypes = {}

ExamplesAlerts.defaultProps = {}
