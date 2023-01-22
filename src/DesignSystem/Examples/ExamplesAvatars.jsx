import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Avatar } from '@mui/material'

import avatarImage from './assets/avatar.png'

class ExamplesAvatars extends PureComponent {
  render () {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <Avatar size='S' src={avatarImage}>
            A
          </Avatar>
        </Grid>
        <Grid item>
          <Avatar size='M' src={avatarImage}>
            A
          </Avatar>
        </Grid>
        <Grid item>
          <Avatar size='L' src={avatarImage}>
            A
          </Avatar>
        </Grid>
        <Grid item>
          <Avatar size='XL' src={avatarImage}>
            A
          </Avatar>
        </Grid>
        <Grid item>
          <Avatar size='XXL' src={avatarImage}>
            A
          </Avatar>
        </Grid>
        <Grid item>
          <Avatar size='3XL' src={avatarImage}>
            A
          </Avatar>
        </Grid>
      </Grid>
    )
  }
}

export default ExamplesAvatars

ExamplesAvatars.propTypes = {}

ExamplesAvatars.defaultProps = {}
