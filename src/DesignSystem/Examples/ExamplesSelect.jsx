import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DsSelect from '../Components/DsSelect'
import { Box } from '@mui/system'
import { FormHelperText, Grid, Paper } from '@mui/material'

const optionsArray = [
  'Option_1',
  'Option_2',
  'Option_3',
  'Option_4',
  'Option_5'
]
const optionsObject = [
  { name: 'Options_1', id: 1 },
  { name: 'Options_2', id: 1 },
  { name: 'Options_3', id: 1 },
  { name: 'Options_4', id: 1 },
  { name: 'Options_5', id: 1 },
  { name: 'Options_6', id: 1 }
]

class ExamplesSelect extends Component {
  constructor (props) {
    super(props)
    this.state = {
      val: ''
    }
  }

  render () {
    const { val } = this.state
    return (
      <>
        <Paper sx={{ p: 6 }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <DsSelect
                label='The nominee is my...'
                options={optionsArray}
                value={val.name}
                onChange={(e, val) => {
                  const { props } = val
                  this.setState({ val: props.value })
                }}
                placeholder='Select category'
                error={!val}
                helperText='Invalid Country'
              />
            </Grid>

            <Grid item xs={12}>
              <FormHelperText>Example With Array Of Object</FormHelperText>
              <DsSelect
                options={optionsObject}
                value={val.name}
                onChange={(e, val) => {
                  this.setState({ val })
                }}
                placeholder='Select category'
                displayKey='name'
                error={!val}
                helperText='Invalid Country'
              />
            </Grid>

            <Grid item xs={12}>
              <DsSelect
                disabled
                options={optionsArray}
                displayKey='name'
                value={val.name}
                onChange={() => { }}
                placeholder='Select category'
              />
            </Grid>
          </Grid>
        </Paper>
      </>
    )
  }
}

ExamplesSelect.propTypes = {}

export default ExamplesSelect
