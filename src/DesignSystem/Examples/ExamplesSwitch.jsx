import React, { PureComponent } from 'react'
import DsPaper from '../Components/DsPaper'
import DsStack from '../Components/DsStack'
import DsBox from '../Components/DsBox'
import DsSwitch from '../Components/DsSwitch'

class ExamplesSwitch extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      switchValue: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (name, value) {
    this.setState({ [name]: value })
  }

  render () {
    const { switchValue } = this.state

    return (
      <>
        <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
          <DsStack direction='row' spacing='var(--ds-spacing-mild)'>
            <DsBox>
              <DsSwitch
                name='switchValue'
                value={switchValue}
                onChange={this.handleChange}
              />
            </DsBox>

            <DsBox>
              <DsSwitch
                name='switchValue'
                value={switchValue}
                onChange={this.handleChange}
                disabled
              />
            </DsBox>
          </DsStack>
        </DsPaper>
      </>
    )
  }
}

export default ExamplesSwitch
