import React, { PureComponent } from 'react'
import DsPaper from '../Components/DsPaper'
import DsStack from '../Components/DsStack'
import DsBox from '../Components/DsBox'
import DsToggle from '../Components/DsToggle'

class ExamplesToggle extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      toggleValue: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (name, value) {
    this.setState({ [name]: value })
  }

  render () {
    const { toggleValue } = this.state

    return (
      <>
        <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
          <DsStack direction='row' spacing='var(--ds-spacing-mild)'>
            <DsBox>
              <DsToggle
                name='toggleValue'
                value={toggleValue}
                onChange={this.handleChange}
              />
            </DsBox>
            <DsBox>
              <DsToggle
                name='toggleValue'
                value={toggleValue}
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

export default ExamplesToggle
