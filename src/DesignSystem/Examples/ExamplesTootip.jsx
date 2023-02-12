import React, { Component } from 'react'

import DsPaper from '../Components/DsPaper'
import DsTooltip from '../Components/DsTooltip'
import DsIconButton from '../Components/DsIconButton'
import DsRemixIcon from '../Components/DsRemixIcon'
import DsButtonGroup from '../Components/DsButtonGroup'
import DsButton from '../Components/DsButton'
import DsTypo from '../Components/DsTypo'

class ExamplesAccordion extends Component {
  render () {
    return (
      <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
        <DsTooltip
          heading='New feature'
          description='Something about this feature and what it does.'
          buttonGroup={
            <DsButtonGroup>
              <DsButton color='secondary'>Not interested</DsButton>
              <DsButton>Show me more</DsButton>
            </DsButtonGroup>
          }
        >
          <DsIconButton>
            <DsRemixIcon className='ri-delete-bin-line' />
          </DsIconButton>
        </DsTooltip>

        <DsTypo>
          You can add upto 2 co-applicants. Mode of holding for&nbsp;
          <DsTooltip
            component='span'
            heading='New feature'
            description='Something about this feature and what it does.'
            buttonGroup={
              <DsButtonGroup>
                <DsButton color='secondary'>Not interested</DsButton>
                <DsButton>Show me more</DsButton>
              </DsButtonGroup>
            }
          >
            <DsTypo component='span'>co-applicants is</DsTypo>
          </DsTooltip>&nbsp;anyone or survivor.
        </DsTypo>
      </DsPaper>
    )
  }
}

ExamplesAccordion.propTypes = {}

export default ExamplesAccordion
