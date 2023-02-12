import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import DsButton from './DsButton'
import DsButtonGroup from './DsButtonGroup'
import DsTypo from './DsTypo'
import DsStack from './DsStack'

const DefaultActionBar = (props) => {
  const { onAccept, onCancel } = props
  return (
    <DsButtonGroup fullWidth size='medium'>
      <DsButton color='secondary' onClick={onCancel}> Cancel </DsButton>
      <DsButton color='primary' onClick={onAccept}> Done </DsButton>
    </DsButtonGroup>
  )
}

const DefaultToolbar = (props) => {
  const { parsedValue } = props

  const val = parsedValue || new Date()
  const currentYear = val && val.getFullYear()
  const formatOptions = { month: 'short', day: 'numeric', weekday: 'short' }
  const currentDateAndDay = val && val.toLocaleDateString('en-us', formatOptions)

  return (
    <DsStack
      sx={{
        backgroundColor: 'var(--ds-color-surfaceSecondary)',
        padding: 'var(--ds-spacing-bitterCold) var(--ds-spacing-bitterCold)'
      }}
      spacing='var(--ds-spacing-quickFreeze)'
    >
      <DsTypo variant='headingBoldExtraSmall' sx={{ color: 'var(--ds-color-typoSecondary)' }}>{currentYear}</DsTypo>
      <DsTypo variant='headingBoldMedium' sx={{ color: 'var(--ds-color-typoPrimary)' }}>{currentDateAndDay}</DsTypo>
    </DsStack>
  )
}

class DsDatePicker extends PureComponent {
  static propTypes = {
  }

  static defaultProps = {
    color: 'secondary'
  }

  render () {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          components={{ ActionBar: DefaultActionBar }}
          ToolbarComponent={DefaultToolbar}
          {...this.props}
        />
      </LocalizationProvider>
    )
  }
}

export default DsDatePicker
