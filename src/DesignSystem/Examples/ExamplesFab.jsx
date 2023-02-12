import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import DsPaper from '../Components/DsPaper'
import DsStack from '../Components/DsStack'
import DsBox from '../Components/DsBox'
import DsFab from '../Components/DsFab'
import DsTypo from '../Components/DsTypo'
import DsRemixIcon from '../Components/DsRemixIcon'

class ExamplesFab extends Component {
  render () {
    return (
      <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
        <DsStack direction='row' spacing='var(--ds-spacing-mild)'>
          <DsStack direction='column' spacing='var(--ds-spacing-mild)'>
            <DsBox>
              <DsFab size='medium' variant='extended'>
                <DsRemixIcon className='ri-add-line' />
                <DsTypo>Floating action button</DsTypo>
              </DsFab>
            </DsBox>
            <DsBox>
              <DsFab size='medium' variant='extended'>
                <DsTypo>Floating action button</DsTypo>
              </DsFab>
            </DsBox>
            <DsBox>
              <DsFab size='medium'>
                <DsRemixIcon className='ri-add-line' />
              </DsFab>
            </DsBox>
          </DsStack>
          <DsStack direction='column' spacing='var(--ds-spacing-mild)'>
            <DsBox>
              <DsFab size='medium' color='default' variant='extended'>
                <DsRemixIcon className='ri-close-line' />
                <DsTypo>Close</DsTypo>
              </DsFab>
            </DsBox>
            <DsBox>
              <DsFab size='medium' color='default' variant='extended'>
                <DsTypo>Close</DsTypo>
              </DsFab>
            </DsBox>
            <DsBox>
              <DsFab size='medium' color='default'>
                <DsRemixIcon className='ri-close-line' />
              </DsFab>
            </DsBox>
          </DsStack>

          <DsStack direction='column' spacing='var(--ds-spacing-mild)' sx={{ pl: 'var(--ds-spacing-molten)' }}>
            <DsBox>
              <DsFab size='small' variant='extended'>
                <DsRemixIcon className='ri-add-line' />
                <DsTypo>Floating action button</DsTypo>
              </DsFab>
            </DsBox>
            <DsBox>
              <DsFab size='small' variant='extended'>
                <DsTypo>Floating action button</DsTypo>
              </DsFab>
            </DsBox>
            <DsBox>
              <DsFab size='small'>
                <DsRemixIcon className='ri-add-line' />
              </DsFab>
            </DsBox>
          </DsStack>
          <DsStack direction='column' spacing='var(--ds-spacing-mild)'>
            <DsBox>
              <DsFab size='small' color='default' variant='extended'>
                <DsRemixIcon className='ri-close-line' />
                <DsTypo>Close</DsTypo>
              </DsFab>
            </DsBox>
            <DsBox>
              <DsFab size='small' color='default' variant='extended'>
                <DsTypo>Close</DsTypo>
              </DsFab>
            </DsBox>
            <DsBox>
              <DsFab size='small' color='default'>
                <DsRemixIcon className='ri-close-line' />
              </DsFab>
            </DsBox>
          </DsStack>
        </DsStack>
      </DsPaper>
    )
  }
}

export default ExamplesFab
