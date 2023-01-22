import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Paper, Grid, InputAdornment } from '@mui/material'
import DsTextField from 'src/DesignSystem/Components/DsTextField'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'

class ExamplesTextField extends PureComponent {
  state = { passwordVisible: false }

  constructor (props) {
    super(props)

    this.handleTogglePassword = this.handleTogglePassword.bind(this)
  }

  handleTogglePassword = () => {
    this.setState({ passwordVisible: !this.state.passwordVisible })
  }

  render () {
    return (
      <>
        <Paper sx={{ p: 6 }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <DsTextField
                label='Default'
                endAdornment={
                  <InputAdornment
                    position='end'
                    onClick={this.handleTogglePassword}
                  >
                    {this.state.passwordVisible
                      ? (
                        <VisibilityOff
                          onClick={this.handleTogglePassword}
                          onMouseDown={this.handleTogglePassword}
                        />
                        )
                      : (
                        <Visibility
                          onClick={this.handleTogglePassword}
                          onMouseDown={this.handleTogglePassword}
                        />
                        )}
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <DsTextField label='Filling' autoFocus />
            </Grid>
            <Grid item xs={12}>
              <DsTextField label='Error' helperText='Some error' error />
            </Grid>
            <Grid item xs={12}>
              <DsTextField label='Success' helperText='Success text' success />
            </Grid>
            <Grid item xs={12}>
              <DsTextField
                label='Disabled'
                helperText='Disable text'
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <DsTextField
                label='Filled'
                helperText='Filled text'
                value='Some Value Filled'
              />
            </Grid>

            <Grid item xs={12}>
              <DsTextField
                label='Display'
                helperText='Display text'
                value='Some Value Display'
                readOnly
              />
            </Grid>
          </Grid>
        </Paper>
      </>
    )
  }
}

export default ExamplesTextField

ExamplesTextField.propTypes = {
  state: PropTypes.object,
  onInputChange: PropTypes.func,
  onLogin: PropTypes.func
}

ExamplesTextField.defaultProps = {
  state: {},
  onInputChange: () => undefined,
  onLogin: () => undefined
}
