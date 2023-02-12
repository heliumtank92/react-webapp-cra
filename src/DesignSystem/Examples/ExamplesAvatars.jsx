import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import DsStack from '../Components/DsStack'
import DsAvatar from '../Components/DsAvatar'
import DsRemixIcon from '../Components/DsRemixIcon'

class ExamplesAvatars extends PureComponent {
  render () {
    return (
      <>
        <DsStack
          sx={{
            backgroundColor: 'var(--ds-color-surfacePrimary)',
            p: 'var(--ds-spacing-hot)'
          }}
          direction='row'
          alignItems='center'
          spacing='var(--ds-spacing-mild)'
        >
          <DsAvatar ds-variant='text' size='S'>V</DsAvatar>
          <DsAvatar ds-variant='text' size='M'>VS</DsAvatar>
          <DsAvatar ds-variant='text' size='L'>VS</DsAvatar>
          <DsAvatar ds-variant='text' size='XL'>VS</DsAvatar>
          <DsAvatar ds-variant='text' size='XXL'>VS</DsAvatar>
          <DsAvatar ds-variant='text' size='3XL'>VS</DsAvatar>
        </DsStack>
        <DsStack
          sx={{
            mt: 'var(--ds-spacing-mild)',
            backgroundColor: 'var(--ds-color-surfacePrimary)',
            p: 'var(--ds-spacing-hot)'
          }}
          direction='row'
          alignItems='center'
          spacing='var(--ds-spacing-mild)'
        >
          <DsAvatar ds-variant='icon' size='S'>
            <DsRemixIcon className='ri-account-circle-fill' />
          </DsAvatar>
          <DsAvatar ds-variant='icon' size='M'>
            <DsRemixIcon className='ri-account-circle-fill' />
          </DsAvatar>
          <DsAvatar ds-variant='icon' size='L'>
            <DsRemixIcon className='ri-account-circle-fill' />
          </DsAvatar>
          <DsAvatar ds-variant='icon' size='XL'>
            <DsRemixIcon className='ri-account-circle-fill' />
          </DsAvatar>
          <DsAvatar ds-variant='icon' size='XXL'>
            <DsRemixIcon className='ri-account-circle-fill' />
          </DsAvatar>
          <DsAvatar ds-variant='icon' size='3XL'>
            <DsRemixIcon className='ri-account-circle-fill' />
          </DsAvatar>
        </DsStack>
        <DsStack
          sx={{
            mt: 'var(--ds-spacing-mild)',
            backgroundColor: 'var(--ds-color-surfacePrimary)',
            p: 'var(--ds-spacing-hot)'
          }}
          direction='row'
          alignItems='center'
          spacing='var(--ds-spacing-mild)'
        >
          <DsAvatar
            ds-variant='image'
            size='S'
            src='https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg'
          />
          <DsAvatar
            ds-variant='image'
            size='M'
            src='https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg'
          />
          <DsAvatar
            ds-variant='image'
            size='L'
            src='https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg'
          />
          <DsAvatar
            ds-variant='image'
            size='XL'
            src='https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg'
          />
          <DsAvatar
            ds-variant='image'
            size='XXL'
            src='https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg'
          />
          <DsAvatar
            ds-variant='image'
            size='3XL'
            src='https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg'
          />
        </DsStack>
      </>
    )
  }
}

export default ExamplesAvatars

ExamplesAvatars.propTypes = {}

ExamplesAvatars.defaultProps = {}
