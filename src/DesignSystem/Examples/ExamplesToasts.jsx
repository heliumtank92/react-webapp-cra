import React, { PureComponent } from 'react'
import DsPaper from '../Components/DsPaper'
import DsGrid from '../Components/DsGrid'
import DsStack from '../Components/DsStack'
import DsToast from '../Components/DsToast'
import DsRemixIcon from '../Components/DsRemixIcon'

class ExamplesToasts extends PureComponent {
  render () {
    return (
      <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
        <DsGrid container direction='row' spacing={8}>
          <DsGrid item direction='column' xs={12} lg={6}>
            <DsStack spacing='var(--ds-spacing-mild)'>
              <DsToast variant='filled' onClose={() => { }} icon={<DsRemixIcon className='ri-information-line' />}>
                This is an error alert — check it out!
              </DsToast>
              <DsToast variant='filled' color='info' onClose={() => { }} icon={<DsRemixIcon className='ri-information-line' />}>
                This is an info alert — check it out!
              </DsToast>
              <DsToast variant='filled' color='success' onClose={() => { }} icon={<DsRemixIcon className='ri-information-line' />}>
                This is a success alert — check it out!
              </DsToast>
              <DsToast variant='filled' color='error' onClose={() => { }} icon={<DsRemixIcon className='ri-information-line' />}>
                This is an error alert — check it out!
              </DsToast>
              <DsToast variant='filled' color='warning' onClose={() => { }} icon={<DsRemixIcon className='ri-information-line' />}>
                This is a warning alert — check it out!
              </DsToast>
            </DsStack>
          </DsGrid>

          <DsGrid item direction='column' xs={12} lg={6} spacing={8}>
            <DsStack spacing='var(--ds-spacing-mild)'>
              <DsToast variant='outlined' onClose={() => { }} icon={<DsRemixIcon className='ri-information-line' />}>
                This is an error alert — check it out!
              </DsToast>
              <DsToast variant='outlined' color='info' onClose={() => { }} icon={<DsRemixIcon className='ri-information-line' />}>
                This is an info alert — check it out!
              </DsToast>
              <DsToast variant='outlined' color='success' onClose={() => { }} icon={<DsRemixIcon className='ri-information-line' />}>
                This is a success alert — check it out!
              </DsToast>
              <DsToast variant='outlined' color='error' onClose={() => { }} icon={<DsRemixIcon className='ri-information-line' />}>
                This is an error alert — check it out!
              </DsToast>
              <DsToast variant='outlined' color='warning' onClose={() => { }} icon={<DsRemixIcon className='ri-information-line' />}>
                This is a warning alert — check it out!
              </DsToast>
            </DsStack>
          </DsGrid>
        </DsGrid>
      </DsPaper>
    )
  }
}

export default ExamplesToasts

ExamplesToasts.propTypes = {}

ExamplesToasts.defaultProps = {}
