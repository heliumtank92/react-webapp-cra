import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import DsAppBar from '../Components/DsAppBar'
import MenuIcon from '@mui/icons-material/Menu'
import DsIconButton from '../Components/DsIconButton'
import DsStack from '../Components/DsStack'

const rightActions = [
  <DsIconButton key='0'>
    <MenuIcon />
  </DsIconButton>,
  <DsIconButton key='1'>
    <MenuIcon />
  </DsIconButton>
]

class ExamplesAppBar extends PureComponent {
  render () {
    return (
      <DsStack spacing='var(--ds-spacing-cool)'>
        <DsAppBar
          position='static'
          leftIcon={
            <DsIconButton>
              <MenuIcon />
            </DsIconButton>
          }
          content='Lorem Ipsum'
          rightActions={rightActions}
        />
        <DsAppBar
          position='static'
          color='primary'
          leftIcon={
            <DsIconButton>
              <MenuIcon />
            </DsIconButton>
          }
          content='Lorem Ipsum'
          rightActions={rightActions}
        />
      </DsStack>
    )
  }
}

export default ExamplesAppBar
