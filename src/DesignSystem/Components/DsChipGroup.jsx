import React, { PureComponent } from 'react'

import Stack from '@mui/system/Stack'

export default class DsChipGroup extends PureComponent {
  render () {
    const { children } = this.props
    return (
      <Stack direction='row' spacing='var(--ds-spacing-glacial)'>
        {children}
      </Stack>
    )
  }
}
