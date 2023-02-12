import React, { Component } from 'react'
import DsPaper from '../Components/DsPaper'
import DsProgressTracker from '../Components/DsProgressTracker'

// Todo => bind this object with redux
const steps = [
  { stepName: 'Personal Details' },
  { stepName: 'Contact Details' },
  { stepName: 'Income Details' },
  { stepName: 'Tax Details' },
  { stepName: 'Review Details' },
  { stepName: 'Add nominee' },
  { stepName: 'Link Bank Account' }
]

class ExamplesProgressTracker extends Component {
  render () {
    return (
      <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
        <DsProgressTracker steps={steps} activeStep={2} />
      </DsPaper>
    )
  }
}

ExamplesProgressTracker.propTypes = {}

export default ExamplesProgressTracker
