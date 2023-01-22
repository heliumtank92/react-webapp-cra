import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Chip } from '@mui/material'

class DsTag extends PureComponent {
  render () {
    const { checked, ...restProps } = this.props
    return (
      <Chip
        type={checked ? 'tag-on' : 'tag-off'}
        size='medium'
        {...restProps}
      />
    )
  }
}

DsTag.propTypes = {
  tags: PropTypes.any,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default DsTag
