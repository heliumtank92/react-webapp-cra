import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import DsPaper from '../Components/DsPaper'
import DsRadio from '../Components/DsRadio'
import DsStack from '../Components/DsStack'

class ExamplesRadio extends Component {
  render () {
    return (
      <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
        <DsStack direction='row' spacing='var(--ds-spacing-mild)'>
          <DsRadio
            checked
            onChange={(e, b) => console.log(e, b)}
            onClick={(e, b) => console.log(e, b)}
            label='Selected'
          // color='secondary'
          />
          <DsRadio
            checked
            onChange={(e, b) => console.log(e, b)}
            onClick={(e, b) => console.log(e, b)}
            label='Selected Disabled'
            disabled
          />
        </DsStack>
        <DsStack direction='row' spacing='var(--ds-spacing-mild)' sx={{ mt: 'var(--ds-spacing-mild)' }}>
          <DsRadio
            onChange={(e, b) => console.log(e, b)}
            onClick={(e, b) => console.log(e, b)}
            label='Unselected'
          // color='secondary'
          />
          <DsRadio
            onChange={(e, b) => console.log(e, b)}
            onClick={(e, b) => console.log(e, b)}
            label='Unselected Disabled'
            disabled
          />
        </DsStack>
      </DsPaper>
    )
  }
}

export default ExamplesRadio
