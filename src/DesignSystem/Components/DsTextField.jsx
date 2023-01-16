import React, { PureComponent } from 'react'

import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'

import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

export default class DsTextField extends PureComponent {
  render () {
    const {
      id,
      name,
      label,
      color,
      helperText,
      success,
      error,
      endAdornment,
      sx,
      fullWidth,
      ...textFiledProps
    } = this.props

    const customColor = success ? 'success' : color

    const Icon = (error && ErrorRoundedIcon) || (success && CheckCircleRoundedIcon) || ''
    const helperTextJSX = (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          color: `${customColor}.main`
        }}
      >
        {Icon && <Icon color='inherit' sx={{ fontSize: 16, mr: 'var(--ds-spacing-quickfreeze)' }} />}
        <Typography sx={{ pl: 0.5 }} variant='body3' color='inherit'>{helperText}</Typography>
      </Box>
    )

    return (
      <FormControl fullWidth={fullWidth} color={customColor} error={error} sx={sx} {...textFiledProps}>
        {
          label && <InputLabel color={customColor} error={error} htmlFor={id || name} {...textFiledProps}>{label}</InputLabel>
        }
        <InputBase fullWidth={fullWidth} endAdornment={endAdornment} color={customColor} error={error} id={id || name} name={name} {...textFiledProps} />
        {
          helperText && <FormHelperText component='div' color={customColor} error={error} {...textFiledProps}>{helperTextJSX}</FormHelperText>
        }
      </FormControl>
    )
  }
}
