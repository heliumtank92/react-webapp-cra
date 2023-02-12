import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import DsGrid from '../Components/DsGrid'
import DsStack from '../Components/DsStack'
import DsButton from '../Components/DsButton'

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
      <DsGrid direction='column' container spacing={2}>
        <DsGrid item>
          <DsStack direction='row' spacing={2}>
            <DsButton
              onClick={() => {
                this.enqueueNotification('', 'filled')
              }}
            >
              Default Filled
            </DsButton>
            <DsButton
              onClick={() => {
                this.enqueueNotification('info', 'filled')
              }}
            >
              Info Filled
            </DsButton>
            <DsButton
              onClick={() => {
                this.enqueueNotification('success', 'filled')
              }}
            >
              Success Filled
            </DsButton>
            <DsButton
              onClick={() => {
                this.enqueueNotification('error', 'filled')
              }}
            >
              Error Filled
            </DsButton>
            <DsButton
              onClick={() => {
                this.enqueueNotification('warning', 'filled')
              }}
            >
              Warning Filled
            </DsButton>
          </DsStack>
        </DsGrid>
        <DsGrid item>
          <DsStack direction='row' spacing={2}>
            <DsButton
              onClick={() => {
                this.enqueueNotification('', 'outlined')
              }}
            >
              Default Outlined
            </DsButton>
            <DsButton
              onClick={() => {
                this.enqueueNotification('info', 'outlined')
              }}
            >
              Info Outlined
            </DsButton>
            <DsButton
              onClick={() => {
                this.enqueueNotification('success', 'outlined')
              }}
            >
              Success Outlined
            </DsButton>
            <DsButton
              onClick={() => {
                this.enqueueNotification('error', 'outlined')
              }}
            >
              Error Outlined
            </DsButton>
            <DsButton
              onClick={() => {
                this.enqueueNotification('warning', 'outlined')
              }}
            >
              Warning Outlined
            </DsButton>
          </DsStack>
        </DsGrid>
      </DsGrid>
    )
  }
}

export default withSnackbar(ExamplesNotification)
