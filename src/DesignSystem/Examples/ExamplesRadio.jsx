import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import DsRadio from '../Components/DsRadio'
import { FormHelperText, Grid, Paper, Radio } from '@mui/material'

class ExamplesRadio extends Component {
  render () {
    return (
      <Paper sx={{ p: 6, backgroundColor: 'inherit' }}>
        <DsRadio
          onChange={(e, b) => console.log(e, b)}
          onClick={(e, b) => console.log(e, b)}
          label='Annual Gross Income'
          color='secondary'
        />
      </Paper>
    )
  }
}

ExamplesRadio.propTypes = {}

export default ExamplesRadio
