import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DsBox from './DsBox'
import DsStack from './DsStack'
import DsImage from 'src/DesignSystem/Components/DsImage'

export default class DsHeader extends Component {
  static propTypes = {
    logoUrl: PropTypes.string.isRequired
  }

  static defaultProps = {}

  render () {
    const { logoUrl, children } = this.props
    return (
      <DsBox
        sx={{
          height: {
            xs: 'var(--ds-rules-headerMobileHeight)',
            md: 'var(--ds-rules-headerDesktopHeight)'
          },
          backgroundColor: 'var(--ds-color-surfacePrimary)',
          boxShadow: 'var(--ds-elevation-3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <DsImage src={logoUrl} style={{ height: '100%' }} alt='logo' />
        <DsBox
          sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            pr: {
              xs: 'var(--ds-spacing-cool)',
              md: 'var(--ds-spacing-mild)'
            },
            pb: {
              xs: 'var(--ds-spacing-glacial)',
              md: 'var(--ds-spacing-frostbite)'
            }
          }}
        >
          <DsStack>
            {children}
          </DsStack>
        </DsBox>
      </DsBox>
    )
  }
}
