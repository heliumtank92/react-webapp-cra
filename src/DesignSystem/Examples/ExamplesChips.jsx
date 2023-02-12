import React, { PureComponent } from 'react'
import DsPaper from '../Components/DsPaper'
import DsStack from '../Components/DsStack'
import DsChip from '../Components/DsChip'
import DsRemixIcon from '../Components/DsRemixIcon'

class ExamplesChips extends PureComponent {
  render () {
    return (
      <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
        <DsStack direction='column' spacing='var(--ds-spacing-mild)'>
          <DsStack direction='row' spacing='var(--ds-spacing-mild)'>
            <DsChip label='Default' color='default' />
            <DsChip label='Success' color='success' />
            <DsChip label='Warning' color='warning' />
            <DsChip label='Error' color='error' />
            <DsChip label='Info' color='info' />
          </DsStack>
          <DsStack direction='row' spacing='var(--ds-spacing-mild)'>
            <DsChip icon={<DsRemixIcon className='ri-star-fill' />} label='Default' color='default' />
            <DsChip icon={<DsRemixIcon className='ri-star-fill' />} label='Success' color='success' />
            <DsChip icon={<DsRemixIcon className='ri-star-fill' />} label='Warning' color='warning' />
            <DsChip icon={<DsRemixIcon className='ri-star-fill' />} label='Error' color='error' />
            <DsChip icon={<DsRemixIcon className='ri-star-fill' />} label='Info' color='info' />
          </DsStack>
          <DsStack direction='row' spacing='var(--ds-spacing-mild)'>
            <DsChip type='nudge' label='Default' color='default' />
            <DsChip type='nudge' label='Success' color='success' />
            <DsChip type='nudge' label='Warning' color='warning' />
            <DsChip type='nudge' label='Error' color='error' />
            <DsChip type='nudge' label='Info' color='info' />
          </DsStack>
          <DsStack direction='row' spacing='var(--ds-spacing-mild)'>
            <DsChip type='nudge' icon={<DsRemixIcon className='ri-star-fill' />} label='Default' color='default' />
            <DsChip type='nudge' icon={<DsRemixIcon className='ri-star-fill' />} label='Success' color='success' />
            <DsChip type='nudge' icon={<DsRemixIcon className='ri-star-fill' />} label='Warning' color='warning' />
            <DsChip type='nudge' icon={<DsRemixIcon className='ri-star-fill' />} label='Error' color='error' />
            <DsChip type='nudge' icon={<DsRemixIcon className='ri-star-fill' />} label='Info' color='info' />
          </DsStack>
        </DsStack>
      </DsPaper>
    )
  }
}

export default ExamplesChips

ExamplesChips.propTypes = {}

ExamplesChips.defaultProps = {}
