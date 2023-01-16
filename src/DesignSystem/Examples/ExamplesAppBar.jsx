import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import DsAppBar from '../Components/DsAppBar'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Avatar } from '@mui/material'

const rightActions = [
  <IconButton key='0'><MenuIcon /></IconButton>,
  <IconButton key='1'><MenuIcon /></IconButton>,
  <IconButton key='2'><Avatar /></IconButton>
]

class ExamplesAppBar extends PureComponent {
  render () {
    return (
      <Grid direction='column' container spacing={4}>
        <Grid container direction='row' item spacing={4}>
          <Grid item xs={7}>
            <DsAppBar
              position='static'
              leftIcon={<IconButton><MenuIcon /></IconButton>}
              content='Lorem Ipsum'
              rightActions={rightActions}
            />
          </Grid>
          <Grid item xs={7}>
            <DsAppBar
              position='static'
              color='primary'
              leftIcon={<IconButton><MenuIcon /></IconButton>}
              content='Lorem Ipsum'
              rightActions={rightActions}
            />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default ExamplesAppBar

ExamplesAppBar.propTypes = {
}

ExamplesAppBar.defaultProps = {
}
