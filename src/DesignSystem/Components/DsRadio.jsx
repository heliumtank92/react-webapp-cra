import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Radio, Typography } from '@mui/material'
import ErrorLabel from './ErrorLabel'

class DsRadio extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    labelPlacement: PropTypes.string
  }

  static defaultProps = {
    labelPlacement: 'end'
  }

  render () {
    const { error, label, labelPlacement, helperText, ...radioProps } = this.props
    return (
      <>
        <FormControlLabel
          control={<Radio {...radioProps} />}
          label={
            <Typography color='text.primary' variant='bodyRegularSmall'>
              {label}
            </Typography>
          }
          labelPlacement={labelPlacement}
        />
        {error && <ErrorLabel helperText={helperText} />}
      </>
    )
  }
}

export default DsRadio
