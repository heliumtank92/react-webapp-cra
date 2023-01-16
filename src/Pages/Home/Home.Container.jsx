import React, { PureComponent } from 'react'
import { UNSAFE_DataRouterContext } from 'react-router-dom'
// import withOuthletProps from 'src/Components/WithOuthletProps'
import HomeWrapper from './Home.Wrapper'

class HomeContainer extends PureComponent {
  static contextType = UNSAFE_DataRouterContext
  render () {
    return (
      <HomeWrapper />
    )
  }
}

export default HomeContainer
