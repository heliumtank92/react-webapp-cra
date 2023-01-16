import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Backdrop, CircularProgress } from '@mui/material'

export default class Loader extends Component {
  render () {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    )
  }
}
