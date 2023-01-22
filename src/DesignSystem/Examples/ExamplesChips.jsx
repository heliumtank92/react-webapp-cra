import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { Grid, Chip } from '@mui/material'
import DsChipGroup from '../Components/DsChipGroup'

import StarIcon from '@mui/icons-material/Star'

class ExamplesChips extends PureComponent {
  render () {
    return (
      <Grid direction='column' container spacing={2}>
        <Grid item>
          <DsChipGroup>
            <Chip label='Default' color='default' />
            <Chip label='Success' color='success' />
            <Chip label='Warning' color='warning' />
            <Chip label='Pending' color='pending' />
            <Chip label='Error' color='error' />
            <Chip label='Info' color='info' />
          </DsChipGroup>
        </Grid>
        <Grid item>
          <DsChipGroup>
            <Chip icon={<StarIcon />} label='Default' color='default' />
            <Chip icon={<StarIcon />} label='Success' color='success' />
            <Chip icon={<StarIcon />} label='Warning' color='warning' />
            <Chip icon={<StarIcon />} label='Pending' color='pending' />
            <Chip icon={<StarIcon />} label='Error' color='error' />
            <Chip icon={<StarIcon />} label='Info' color='info' />
          </DsChipGroup>
        </Grid>
        <Grid item>
          <DsChipGroup>
            <Chip type='nudge' label='Default' color='default' />
            <Chip type='nudge' label='Success' color='success' />
            <Chip type='nudge' label='Warning' color='warning' />
            <Chip type='nudge' label='Pending' color='pending' />
            <Chip type='nudge' label='Error' color='error' />
            <Chip type='nudge' label='Info' color='info' />
          </DsChipGroup>
        </Grid>
        <Grid item>
          <DsChipGroup>
            <Chip
              type='nudge'
              icon={<StarIcon />}
              label='Default'
              color='default'
            />
            <Chip
              type='nudge'
              icon={<StarIcon />}
              label='Success'
              color='success'
            />
            <Chip
              type='nudge'
              icon={<StarIcon />}
              label='Warning'
              color='warning'
            />
            <Chip
              type='nudge'
              icon={<StarIcon />}
              label='Pending'
              color='pending'
            />
            <Chip
              type='nudge'
              icon={<StarIcon />}
              label='Error'
              color='error'
            />
            <Chip type='nudge' icon={<StarIcon />} label='Info' color='info' />
          </DsChipGroup>
        </Grid>
      </Grid>
    )
  }
}

export default ExamplesChips

ExamplesChips.propTypes = {}

ExamplesChips.defaultProps = {}
