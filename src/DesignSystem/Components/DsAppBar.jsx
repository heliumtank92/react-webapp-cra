import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/system/Stack'

export default class DsAppBar extends PureComponent {
  static propTypes = {
    open: PropTypes.bool,
    leftIcon: PropTypes.element,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    rightActions: PropTypes.arrayOf(PropTypes.element)
  }

  static defaultProps = {
    open: false,
    content: ''
  }

  render () {
    const { leftIcon, content, rightActions, ...appBarProps } = this.props

    const contentJSX =
      typeof content === 'string'
        ? (
          <Typography variant='headingBoldSmall'>{content}</Typography>
          )
        : (
            content
          )
    return (
      <AppBar {...appBarProps}>
        <Toolbar>
          {leftIcon && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pr: 'var(--ds-spacing-bitterCold)'
              }}
            >
              {React.cloneElement(leftIcon, { variant: 'app-bar' })}
            </Box>
          )}
          <Box
            sx={{
              displayd: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
              pr: 'var(--ds-spacing-bitterCold)'
            }}
          >
            {contentJSX}
          </Box>
          {rightActions && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Stack direction='row' spacing='var(--ds-spacing-bitterCold)'>
                {rightActions.map((rightAction) =>
                  React.cloneElement(rightAction, { variant: 'app-bar' })
                )}
              </Stack>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}
