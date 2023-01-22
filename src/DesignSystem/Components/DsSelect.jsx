import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormControl, MenuItem, Select, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box } from '@mui/system'
import ErrorLabel from './ErrorLabel'

const Placeholder = ({ placeholder }) => {
  return (
    <Typography variant='bodyRegularMedium' color='text.disabled'>
      {placeholder}
    </Typography>
  )
}

class DsSelect extends PureComponent {
  static propTypes = {
    value: PropTypes.any,
    placeholder: PropTypes.string,
    options: PropTypes.any,
    displayKey: PropTypes.string,
    helperText: PropTypes.string,
    error: PropTypes.bool
  }

  render () {
    const {
      value,
      placeholder,
      options,
      displayKey,
      helperText,
      error,
      label,
      ...restProps
    } = this.props

    return (
      <FormControl fullWidth>
        <Box pb={2.5}>
          <Typography variant='bodyRegularMedium'>{label}</Typography>
        </Box>
        <Select
          IconComponent={(props) => <KeyboardArrowDownIcon />}
          value={value}
          displayEmpty
          renderValue={(value) =>
            value && value.length
              ? (
                  Array.isArray(value)
                    ? (
                        value.join(', ')
                      )
                    : (
                        value
                      )
                )
              : (
                <Placeholder placeholder={placeholder} />
                )}
          error={error}
          {...restProps}
        >
          {options.map((val, ind) => (
            <MenuItem value={displayKey ? val[displayKey] : val} key={ind}>
              {displayKey ? val[displayKey] : val}
            </MenuItem>
          ))}
        </Select>
        {error && <ErrorLabel helperText={helperText} />}
      </FormControl>
    )
  }
}

export default DsSelect
