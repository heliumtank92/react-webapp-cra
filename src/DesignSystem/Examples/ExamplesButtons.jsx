import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import DsPaper from '../Components/DsPaper'
import DsGrid from '../Components/DsGrid'
import DsButtonGroup from '../Components/DsButtonGroup'
import DsButton from '../Components/DsButton'
import DsRemixIcon from '../Components/DsRemixIcon'

class ExamplesDsButtons extends PureComponent {
  render () {
    return (
      <>
        <DsPaper sx={{ padding: 'var(--ds-spacing-warm)', mb: 'var(--ds-spacing-warm)' }}>
          <DsGrid container direction='row' spacing={8}>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' size='large'>
                Primary Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' size='medium'>
                Primary Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' size='small'>
                Primary Button Small
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth disabled variant='contained' size='large'>
                Primary Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth disabled variant='contained' size='medium'>
                Primary Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth disabled variant='contained' size='small'>
                Primary Button Small
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' size='large' startIcon={<DsRemixIcon className='ri-add-line' />}>
                Primary Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' size='medium' startIcon={<DsRemixIcon className='ri-add-line' />}>
                Primary Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' size='small' startIcon={<DsRemixIcon className='ri-add-line' />}>
                Primary Button Small
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' size='large' endIcon={<DsRemixIcon className='ri-add-line' />}>
                Primary Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' size='medium' endIcon={<DsRemixIcon className='ri-add-line' />}>
                Primary Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' size='small' endIcon={<DsRemixIcon className='ri-add-line' />}>
                Primary Button Small
              </DsButton>
            </DsGrid>
          </DsGrid>
        </DsPaper>

        <DsPaper sx={{ padding: 'var(--ds-spacing-warm)', mb: 'var(--ds-spacing-warm)' }}>
          <DsGrid container direction='row' spacing={8}>
            <DsGrid item xs={12} md={4}>
              <DsButton id='btn-123' fullWidth variant='contained' color='secondary' size='large'>
                Secondary Button Large
                {/* <span style='z-index: 1'>Secondary Button Large</span> */}
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' color='secondary' size='medium'>
                Secondary Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' color='secondary' size='small'>
                Secondary Button Small
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth disabled variant='contained' color='secondary' size='large'>
                Secondary Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth disabled variant='contained' color='secondary' size='medium'>
                Secondary Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth disabled variant='contained' color='secondary' size='small'>
                Secondary Button Small
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' color='secondary' size='large' startIcon={<DsRemixIcon className='ri-add-line' />}>
                Secondary Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' color='secondary' size='medium' startIcon={<DsRemixIcon className='ri-add-line' />}>
                Secondary Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' color='secondary' size='small' startIcon={<DsRemixIcon className='ri-add-line' />}>
                Secondary Button Small
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' color='secondary' size='large' endIcon={<DsRemixIcon className='ri-add-line' />}>
                Secondary Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' color='secondary' size='medium' endIcon={<DsRemixIcon className='ri-add-line' />}>
                Secondary Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='contained' color='secondary' size='small' endIcon={<DsRemixIcon className='ri-add-line' />}>
                Secondary Button Small
              </DsButton>
            </DsGrid>
          </DsGrid>
        </DsPaper>

        <DsPaper sx={{ padding: 'var(--ds-spacing-warm)', mb: 'var(--ds-spacing-warm)' }}>
          <DsGrid container direction='row' spacing={8}>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='flushed' size='large'>
                Flushed Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='flushed' size='medium'>
                Flushed Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='flushed' size='small'>
                Flushed Button Small
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth disabled variant='flushed' size='large'>
                Flushed Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth disabled variant='flushed' size='medium'>
                Flushed Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth disabled variant='flushed' size='small'>
                Flushed Button Small
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='flushed' size='large' startIcon={<DsRemixIcon className='ri-add-line' />}>
                Flushed Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='flushed' size='medium' startIcon={<DsRemixIcon className='ri-add-line' />}>
                Flushed Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='flushed' size='small' startIcon={<DsRemixIcon className='ri-add-line' />}>
                Flushed Button Small
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='flushed' size='large' endIcon={<DsRemixIcon className='ri-add-line' />}>
                Flushed Button Large
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='flushed' size='medium' endIcon={<DsRemixIcon className='ri-add-line' />}>
                Flushed Button Medium
              </DsButton>
            </DsGrid>
            <DsGrid item xs={12} md={4}>
              <DsButton fullWidth variant='flushed' size='small' endIcon={<DsRemixIcon className='ri-add-line' />}>
                Flushed Button Small
              </DsButton>
            </DsGrid>
          </DsGrid>
        </DsPaper>

        <DsPaper sx={{ padding: 'var(--ds-spacing-warm)', mb: 'var(--ds-spacing-warm)' }}>
          <DsGrid container direction='row' spacing={8}>
            <DsGrid item>
              <DsButton variant='text' color='secondary' size='small'>
                Text Button
              </DsButton>
            </DsGrid>
            <DsGrid item>
              <DsButton disabled variant='text' color='secondary' size='small'>
                Text Button
              </DsButton>
            </DsGrid>
            <DsGrid item>
              <DsButton variant='text' color='secondary' size='small' startIcon={<DsRemixIcon className='ri-add-line' />}>
                Text Button
              </DsButton>
            </DsGrid>
            <DsGrid item>
              <DsButton variant='text' color='secondary' size='small' endIcon={<DsRemixIcon className='ri-add-line' />}>
                Text Button
              </DsButton>
            </DsGrid>
          </DsGrid>
        </DsPaper>

        <DsPaper sx={{ padding: 'var(--ds-spacing-warm)', mb: 'var(--ds-spacing-warm)' }}>
          <DsGrid container direction='row' spacing={8}>
            <DsGrid item xs={12} md={6}>
              <DsButtonGroup
                size='large'
                sx={{ border: '1px solid var(--ds-color-strokeDefault)' }}
              >
                <DsButton fullWidth variant='contained' color='secondary'>
                  Secondary Button
                </DsButton>
                <DsButton fullWidth variant='contained' color='primary'>
                  Primary Button
                </DsButton>
              </DsButtonGroup>
            </DsGrid>
            <DsGrid item xs={12} md={6}>
              <DsButtonGroup
                size='medium'
                sx={{ border: '1px solid var(--ds-color-strokeDefault)' }}
              >
                <DsButton fullWidth variant='contained' color='secondary'>
                  Secondary Button
                </DsButton>
                <DsButton fullWidth variant='contained' color='primary'>
                  Primary Button
                </DsButton>
              </DsButtonGroup>
            </DsGrid>
            <DsGrid item xs={12} md={6}>
              <DsButtonGroup
                size='small'
                sx={{ border: '1px solid var(--ds-color-strokeDefault)' }}
              >
                <DsButton fullWidth variant='contained' color='secondary'>
                  Secondary Button
                </DsButton>
                <DsButton fullWidth variant='contained' color='primary'>
                  Primary Button
                </DsButton>
              </DsButtonGroup>
            </DsGrid>
          </DsGrid>
        </DsPaper>

        <DsPaper sx={{ padding: 'var(--ds-spacing-warm)', mb: 'var(--ds-spacing-warm)' }}>
          <DsGrid container direction='row' spacing={8}>
            <DsGrid item xs={12} md={6}>
              <DsButtonGroup
                noPadding
                fullWidth
                size='large'
                sx={{ border: '1px solid var(--ds-color-strokeDefault)' }}
              >
                <DsButton variant='flushed'>
                  Flushed Button
                </DsButton>
              </DsButtonGroup>
            </DsGrid>
            <DsGrid item xs={12} md={6}>
              <DsButtonGroup
                noPadding
                fullWidth
                size='medium'
                sx={{ border: '1px solid var(--ds-color-strokeDefault)' }}
              >
                <DsButton fullWidth variant='flushed'>
                  Flushed Button
                </DsButton>
              </DsButtonGroup>
            </DsGrid>
            <DsGrid item xs={12} md={6}>
              <DsButtonGroup
                noPadding
                fullWidth
                size='small'
                sx={{ border: '1px solid var(--ds-color-strokeDefault)' }}
              >
                <DsButton variant='flushed'>
                  Flushed Button
                </DsButton>
              </DsButtonGroup>
            </DsGrid>
            <DsGrid item xs={12} md={6} />
          </DsGrid>
        </DsPaper>

        <DsPaper sx={{ padding: 'var(--ds-spacing-warm)', mb: 'var(--ds-spacing-warm)' }}>
          <DsGrid container direction='row' spacing={8}>
            <DsGrid item xs={12} md={6}>
              <DsButtonGroup
                sx={{ border: '1px solid var(--ds-color-strokeDefault)' }}
              >
                <DsButton variant='text' color='secondary'>
                  Text Button 1
                </DsButton>
                <DsButton variant='text' color='secondary'>
                  Text Button 2
                </DsButton>
              </DsButtonGroup>
            </DsGrid>
          </DsGrid>
        </DsPaper>
      </>
    )
  }
}

export default ExamplesDsButtons
