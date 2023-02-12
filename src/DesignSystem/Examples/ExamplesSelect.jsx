import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import DsPaper from '../Components/DsPaper'
import DsGrid from '../Components/DsGrid'
import DsSelect from '../Components/DsSelect'

const optionsObject = [
  { label: 'Options_1', value: 'opt_1' },
  { label: 'Options_2', value: 'opt_2' },
  { label: 'Options_3', value: 'opt_3' },
  { label: 'Options_4', value: 'opt_4' },
  { label: 'Options_5', value: 'opt_5' },
  { label: 'Options_6', value: 'opt_6' }
]

class ExamplesSelect extends Component {
  constructor (props) {
    super(props)
    this.state = {
      val: ''
    }
  }

  render () {
    const { val } = this.state
    return (
      <>
        <DsPaper sx={{ p: 6 }}>
          <DsGrid container spacing={6}>
            <DsGrid item xs={12}>
              <DsSelect
                options={optionsObject}
                value={val.value}
                onChange={(e, val) => {
                  this.setState({ val })
                }}
                placeholder='Select category'
                error={!val}
                helperText='Invalid Country'
              />
            </DsGrid>

            <DsGrid item xs={12}>
              <DsSelect
                disabled
                options={optionsObject}
                value={val.value}
                onChange={() => { }}
                placeholder='Select category'
              />
            </DsGrid>
          </DsGrid>
        </DsPaper>
      </>
    )
  }
}

ExamplesSelect.propTypes = {}

export default ExamplesSelect
