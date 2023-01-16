import React, { PureComponent } from 'react'
import { Outlet, UNSAFE_DataRouterContext } from 'react-router-dom'

class AuthLayout extends PureComponent {
  static contextType = UNSAFE_DataRouterContext
  render () {
    return (
      <Outlet />
    )
  }
}

export default AuthLayout
