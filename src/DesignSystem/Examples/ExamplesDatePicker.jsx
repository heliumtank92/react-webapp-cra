import React, { PureComponent } from 'react'
import { InputAdornment } from '@mui/material'

import DsButton from '../Components/DsButton'
import DsButtonGroup from '../Components/DsButtonGroup'
import DsDatePicker from '../Components/DsDatePicker'
import DsPaper from '../Components/DsPaper'
import DsRemixIcon from '../Components/DsRemixIcon'
import DsTextField from '../Components/DsTextField'
import DsTypo from '../Components/DsTypo'
import { format } from 'date-fns'
import DsStack from '../Components/DsStack'

const DatePickerInputAdornment = (props) => {
  return (
    <InputAdornment
      position='end'
      {...props}
    >
      <DsRemixIcon onClick={props?.onClick} className='ri-calendar-line' fontSize='bitterCold' />
    </InputAdornment>
  )
}

const DefaultActionBar = (props) => {
  const { onAccept, onCancel } = props
  return (
    <DsButtonGroup fullWidth size='medium'>
      <DsButton color='secondary' onClick={onCancel}> Cancel </DsButton>
      <DsButton color='primary' onClick={onAccept}> Done </DsButton>
    </DsButtonGroup>
  )
}

class ExamplesDatePicker extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      selectedDate: format(new Date(), 'yyyy-MM-dd')
    }
  }

  handleOnChange = (value) => {
    // const { selectedDate } = this.state
    const formattedDate = format(value, 'yyyy-MM-dd')
    this.setState({ selectedDate: formattedDate })
  }

  render () {
    const { selectedDate } = this.state
    return (
      <>
        <DsPaper sx={{ padding: 'var(--ds-spacing-warm)', mb: 'var(--ds-spacing-warm)' }}>
          <DsStack spacing='var(--ds-spacing-bitterCold)'>
            <DsDatePicker
            // open
              label='Date Of Birth'
              name='dob'
              placeholder='Enter Date Of Birth'
              inputFormat='dd-MM-yyyy'
              value={new Date(selectedDate)}
              onChange={this.handleOnChange}
              components={{ ActionBar: DefaultActionBar }}
              renderInput={(params) => <DsTextField {...params} endAdornment={<DatePickerInputAdornment />} />}
            />
            <DsTypo>Selected Date: {selectedDate}</DsTypo>
          </DsStack>
        </DsPaper>
      </>
    )
  }
}

export default ExamplesDatePicker

ExamplesDatePicker.propTypes = {}

ExamplesDatePicker.defaultProps = {}
