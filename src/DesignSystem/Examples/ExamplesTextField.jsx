import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import InputAdornment from '@mui/material/InputAdornment'

import DsPaper from 'src/DesignSystem/Components/DsPaper'
import DsStack from 'src/DesignSystem/Components/DsStack'
import DsTextField from 'src/DesignSystem/Components/DsTextField'
import DsRemixIcon from 'src/DesignSystem/Components/DsRemixIcon'
import DsGrid from '../Components/DsGrid'
import DsOtp from '../Components/DsOtp'

class ExamplesTextField extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { passwordVisible: false }
    this.handleTogglePassword = this.handleTogglePassword.bind(this)
  }

  handleTogglePassword = () => {
    this.setState({ passwordVisible: !this.state.passwordVisible })
  }

  render () {
    const { passwordVisible } = this.state

    const leftIcon = (
      <InputAdornment position='start'>
        <DsRemixIcon className='ri-mail-line' />
      </InputAdornment>
    )

    const rightIcon = (
      <InputAdornment position='end'>
        <DsRemixIcon
          className={passwordVisible ? 'ri-eye-line' : 'ri-eye-off-line'}
          onClick={this.handleTogglePassword}
        />
      </InputAdornment>
    )

    return (
      <>
        <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
          <DsGrid container direction='row' spacing={8}>
            <DsGrid item xs={12} md={4} lg={3}>
              <DsTextField label='Default' />
            </DsGrid>
            <DsGrid item xs={12} md={4} lg={3}>
              <DsTextField label='Filled' value='Some Value' />
            </DsGrid>
            <DsGrid item xs={12} md={4} lg={3}>
              <DsTextField label='Error' helperText='Error text' error />
            </DsGrid>
            <DsGrid item xs={12} md={4} lg={3}>
              <DsTextField label='Success' helperText='Success text' success />
            </DsGrid>
            <DsGrid item xs={12} md={4} lg={3}>
              <DsTextField label='Disabled' disabled />
            </DsGrid>
            <DsGrid item xs={12} md={4} lg={3}>
              <DsTextField label='Display' value='Some Value' readOnly />
            </DsGrid>
            <DsGrid item xs={12} md={4} lg={3}>
              <DsTextField label='Left Icon' startAdornment={leftIcon} />
            </DsGrid>
            <DsGrid item xs={12} md={4} lg={3}>
              <DsTextField label='Left Icon' type={passwordVisible ? 'text' : 'password'} endAdornment={rightIcon} />
            </DsGrid>
            <DsGrid item xs={12} md={4} lg={3}>
              <DsTextField label='Disabled Right Icon' disabled endAdornment={rightIcon} />
            </DsGrid>
            <DsGrid item xs={12} md={4} lg={3}>
              <DsTextField label='Display Right Icon' readOnly endAdornment={rightIcon} />
            </DsGrid>
          </DsGrid>
        </DsPaper>
        <DsPaper sx={{ p: 'var(--ds-spacing-mild)', mt: 'var(--ds-spacing-mild)' }}>
          <DsGrid container direction='row' spacing={8}>
            <DsGrid item xs={12} md={6}>
              <DsStack direction='column' spacing='var(--ds-spacing-mild)'>
                <DsOtp size='medium' name='otp1' label='Mobile OTP' length={4} />
                <DsOtp size='medium' name='otp2' label='Mobile OTP' length={4} initialOtp='1234' />
                <DsOtp size='medium' name='otp3' label='Mobile OTP' length={4} helperText='Error text' error />
                <DsOtp size='medium' name='otp4' label='Mobile OTP' length={4} helperText='Success text' success />
                <DsOtp size='medium' name='otp5' label='Mobile OTP' length={4} disabled />
                <DsOtp size='medium' name='otp6' label='Mobile OTP' length={4} initialOtp='1234' readOnly />
              </DsStack>
            </DsGrid>
            <DsGrid item xs={12} md={6}>
              <DsStack direction='column' spacing='var(--ds-spacing-mild)'>
                <DsOtp size='small' name='otp7' label='Mobile OTP' length={4} />
                <DsOtp size='small' name='otp8' label='Mobile OTP' length={4} initialOtp='1234' />
                <DsOtp size='small' name='otp9' label='Mobile OTP' length={4} helperText='Error text' error />
                <DsOtp size='small' name='otp10' label='Mobile OTP' length={4} helperText='Success text' success />
                <DsOtp size='small' name='otp11' label='Mobile OTP' length={4} disabled />
                <DsOtp size='small' name='otp12' label='Mobile OTP' length={4} initialOtp='1234' readOnly />
              </DsStack>
            </DsGrid>
          </DsGrid>
        </DsPaper>
        <DsPaper sx={{ p: 'var(--ds-spacing-mild)', mt: 'var(--ds-spacing-mild)' }}>
          <DsGrid container direction='row' spacing={8}>
            <DsGrid item xs={12} md={6}>
              <DsStack direction='column' spacing='var(--ds-spacing-mild)'>
                <DsOtp size='medium' name='otp13' label='Mobile OTP' length={6} />
                <DsOtp size='medium' name='otp14' label='Mobile OTP' length={6} initialOtp='123456' />
                <DsOtp size='medium' name='otp15' label='Mobile OTP' length={6} helperText='Error text' error />
                <DsOtp size='medium' name='otp16' label='Mobile OTP' length={6} helperText='Success text' success />
                <DsOtp size='medium' name='otp17' label='Mobile OTP' length={6} disabled />
                <DsOtp size='medium' name='otp18' label='Mobile OTP' length={6} initialOtp='123456' readOnly />
              </DsStack>
            </DsGrid>
            <DsGrid item xs={12} md={6}>
              <DsStack direction='column' spacing='var(--ds-spacing-mild)'>
                <DsOtp size='small' name='otp19' label='Mobile OTP' length={6} />
                <DsOtp size='small' name='otp20' label='Mobile OTP' length={6} initialOtp='123456' />
                <DsOtp size='small' name='otp21' label='Mobile OTP' length={6} helperText='Error text' error />
                <DsOtp size='small' name='otp22' label='Mobile OTP' length={6} helperText='Success text' success />
                <DsOtp size='small' name='otp23' label='Mobile OTP' length={6} disabled />
                <DsOtp size='small' name='otp24' label='Mobile OTP' length={6} initialOtp='123456' readOnly />
              </DsStack>
            </DsGrid>
          </DsGrid>
        </DsPaper>
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
