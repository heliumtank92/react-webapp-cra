import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'
import { withSnackbar } from 'notistack'

class AlertMessage extends Component {
  static propTypes = {
    forwardedRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any })
    ]).isRequired,
    enqueueSnackbar: PropTypes.func.isRequired,
    closeSnackbar: PropTypes.func.isRequired,
    messageOptions: PropTypes.shape({
      message: PropTypes.string,
      onClose: PropTypes.func
    })
  }

  static defaultProps = {
    variant: 'info',
    message: '',
    onClose: undefined
  }

  constructor (props) {
    super(props)

    this.handleClose = this.handleClose.bind(this)
  }

  async handleClose () {
    const { messageOptions, closeSnackbar } = this.props
    const { key, onClose } = messageOptions
    if (typeof onClose === 'function') {
      await onClose(this.props)
    }
    closeSnackbar(key)
  }

  render () {
    const { forwardedRef, messageOptions } = this.props
    const { variant, severity, message } = messageOptions

    return (
      <Alert
        ref={forwardedRef}
        variant={variant}
        severity={severity}
        onClose={this.handleClose}
      >
        {message}
      </Alert>
    )
  }
}

const NotistackAlert = withSnackbar(AlertMessage)

const DsNotistackAlert = React.forwardRef((props, ref) => {
  return <NotistackAlert forwardedRef={ref} messageOptions={props.options} />
})

export default DsNotistackAlert

export function buildEnqueueSnackbarProps (options = {}) {
  const key = new Date().getTime()
  const notification = { ...options, key }
  const notificationOptions = { key }

  return [notification, notificationOptions]
}
