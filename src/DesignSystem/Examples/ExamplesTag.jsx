import React, { Component } from 'react'
import DsPaper from '../Components/DsPaper'
import DsStack from '../Components/DsStack'
import DsTagGroup from '../Components/DsTagGroup'
import DsTag from '../Components/DsTag'

const tags = [
  {
    label: 'Annual Gross Income',
    value: 1
  },
  {
    label: 'Net Worth',
    value: 2
  },
  {
    label: 'Testing',
    value: 3
  }
]

class ExamplesTag extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedValue: 1,
      selectedValues: [1]
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  render () {
    return (
      <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
        <DsStack spacing='var(--ds-spacing-hot)'>
          <DsTagGroup
            name='selectedValue'
            value={this.state.selectedValue}
            onChange={this.handleChange}
          >
            {tags.map((tag, index) => (
              <DsTag key={index} label={tag.label} value={tag.value} />
            ))}
          </DsTagGroup>
          <DsTagGroup
            multi
            name='selectedValues'
            value={this.state.selectedValues}
            onChange={this.handleChange}
          >
            {tags.map((tag, index) => (
              <DsTag key={index} label={tag.label} value={tag.value} />
            ))}
          </DsTagGroup>
        </DsStack>
      </DsPaper>
    )
  }
}

export default ExamplesTag
