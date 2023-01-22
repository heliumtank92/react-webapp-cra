import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Stack from '@mui/system/Stack'

export default class DsButtonGroup extends PureComponent {
  static propTypes = {
    primaryActionButton: PropTypes.element,
    secondaryActionButton: PropTypes.element,
    tertiaryActionComponennt: PropTypes.element,
    disablePadding: PropTypes.bool
  }

  static defaultProps = {
    primaryActionButton: null,
    secondaryActionButton: null,
    tertiaryActionComponennt: null,
    disablePadding: false
  }

  render () {
    const {
      primaryActionButton,
      secondaryActionButton,
      disablePadding,
      tertiaryActionComponennt
    } = this.props

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            color: 'var(--ds-color-typoTertiary)',
            textAlign: 'center',
            pb:
              tertiaryActionComponennt && disablePadding
                ? 'var(--ds-spacing-bitterCold)'
                : 'var(--ds-spacing-zero)'
          }}
        >
          {tertiaryActionComponennt}
        </Box>
        <Stack
          direction='row'
          spacing='var(--ds-spacing-frostbite)'
          sx={{
            flex: 1,
            '> button': {
              flex: 1
            },
            p: disablePadding
              ? 'var(--ds-spacing-zero)'
              : 'var(--ds-spacing-bitterCold)',
            bgcolor: {
              xs: 'var(--ds-color-surfaceBackground)',
              sm: 'var(--ds-color-surfaceBackground)',
              md: 'transparent'
            }
          }}
        >
          {secondaryActionButton}
          {primaryActionButton}
        </Stack>
      </Box>
    )
  }
}
