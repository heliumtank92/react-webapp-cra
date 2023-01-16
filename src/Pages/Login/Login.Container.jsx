import React, { PureComponent } from 'react'
import { UNSAFE_DataRouterContext } from 'react-router-dom'
// import withOuthletProps from 'src/Components/WithOuthletProps'
import LoginWrapper from './Login.Wrapper'

class LoginContainer extends PureComponent {
  static contextType = UNSAFE_DataRouterContext
  render () {
    return (
      <LoginWrapper />
    )
  }
}

export default LoginContainer
