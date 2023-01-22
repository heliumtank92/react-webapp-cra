import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormHelperText, Stack, Box, Typography } from '@mui/material'
import DsTextField from './DsTextField'

import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

const KEY_CODES = {
  BACK_SPACE: 8
}

export default class DsOtp extends Component {
  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    name: PropTypes.string,
    length: PropTypes.number
  }

  static defaultProps = {
    name: 'otp',
    length: 6
  }

  constructor (props) {
    super(props)

    this.optInputRefs = new Map()
    this.state = { otp: [] }
  }

  handleFocus = (event) => {
    const { onFocus } = this.props
    const { target } = event
    target.select()
    if (typeof onFocus === 'function') {
      onFocus(event)
    }
  }

  handleKeyDown = (event) => {
    const { onKeyDown } = this.props
    const { keyCode, currentTarget = {} } = event
    const { name, value } = currentTarget
    const index = parseInt(name?.split('.').pop(), 10)

    // Call #handleNavigation on back button pressed
    if (keyCode === KEY_CODES.BACK_SPACE && !value) {
      this.#handleNavigation(index, true)
    }

    if (typeof onKeyDown === 'function') {
      onKeyDown(event)
    }
  }

  handleChange = (event) => {
    const { onChange, onComplete, length } = this.props
    const { otp } = this.state
    const { currentTarget = {} } = event
    const { name, value = '' } = currentTarget
    const index = parseInt(name?.split('.').pop(), 10)

    // Check if valid value
    const filteredValue = value.replace(/\D/g, '').charAt(0) || ''
    otp[index] = filteredValue

    const shouldNavigate = filteredValue
    const _this = this
    this.setState({ otp: [...otp] }, () => {
      if (shouldNavigate) {
        _this.#handleNavigation(index, false)
      }

      if (typeof onChange === 'function') {
        onChange(event)
      }

      const otpString = otp.join('')
      if (otpString.length === length && typeof onComplete === 'function') {
        onComplete(otpString)
      }
    })
  }

  #handleNavigation = (index, isBackPressed) => {
    const nextFocussedIndex = isBackPressed ? --index : ++index
    const nextFocussedInput = this.optInputRefs.get(nextFocussedIndex)
    if (nextFocussedInput) {
      nextFocussedInput.focus()
    }
  }

  handlePaste = (event) => {
    event.preventDefault()
    const { onPaste, onComplete, length } = this.props
    const { clipboardData = window.clipboardData, target } = event

    const pastedData = clipboardData.getData('Text')
    const filteredValue = pastedData.replace(/\D/g, '') || ''
    const otp = filteredValue.split('').slice(0, length)

    this.setState({ otp })
    target.blur()
    const focusIndex = otp.length - 1
    this.#handleNavigation(focusIndex)

    if (typeof onPaste === 'function') {
      onPaste(event)
    }

    const otpString = otp.join('')
    if (otpString.length === length && typeof onComplete === 'function') {
      onComplete(otpString)
    }
  }

  renderOtpBoxes = () => {
    const { otp } = this.state
    const { name, length, helperText, inputProps = {}, ...restProps } = this.props
    const lengthArray = Array(length).fill('')

    const otpInputProps = {
      ...inputProps,
      maxLength: '1',
      style: {
        ...(inputProps.style || {}),
        textAlign: 'center'
      }
    }

    return lengthArray.map(
      (value, index) =>
        <DsTextField
          key={index}
          {...restProps}
          name={`${name}.${index}`}
          dsVariant='otp'
          inputProps={otpInputProps}
          onPaste={this.handlePaste}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={otp[index] || ''}
          inputRef={(ref) => {
            this.optInputRefs.set(index, ref)
          }}
        />
    )
  }

  render () {
    const { helperText, success, color, error, inputProps, ...restProps } = this.props

    const customColor = success ? 'success' : color

    const Icon =
      (error && ErrorRoundedIcon) || (success && CheckCircleRoundedIcon) || ''
    const helperTextJSX = (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          color: `${customColor}.main`
        }}
      >
        {Icon && (
          <Icon
            color='inherit'
            sx={{ fontSize: 16, mr: 'var(--ds-spacing-quickFreeze)' }}
          />
        )}
        <Typography sx={{ pl: 'var(--ds-spacing-deepFreeze)' }} variant='bodyRegularSmall' color='inherit'>
          {helperText}
          &#8203;
        </Typography>
      </Box>
    )
    return (
      <>
        <Stack direction='row' spacing='var(--ds-spacing-glacial)'>
          {this.renderOtpBoxes()}
        </Stack>
        {helperText && (
          <FormHelperText
            component='div'
            color={customColor}
            error={error}
            {...restProps}
          >
            {helperTextJSX}
          </FormHelperText>
        )}
      </>
    )
  }
}
