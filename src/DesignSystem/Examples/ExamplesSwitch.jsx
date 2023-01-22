import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import DsSwitch from '../Components/DsSwitch'

class ExamplesSwitch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toggleValue: 'No'
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (e, val) {
    if (val) this.setState({ toggleValue: val })
  }

  render () {
    const { toggleValue } = this.state
    return (
      <>
        <Paper sx={{ p: 6 }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <DsSwitch value={toggleValue} handleChange={this.onChange} />
            </Grid>
          </Grid>
        </Paper>
      </>
    )
  }
}

ExamplesSwitch.propTypes = {}

export default ExamplesSwitch
