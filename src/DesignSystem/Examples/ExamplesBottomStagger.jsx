import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import DsStack from '../Components/DsStack'
import DsBottomStagger from '../Components/DsBottomStagger'
import DsButtonGroup from '../Components/DsButtonGroup'
import DsButton from '../Components/DsButton'

export default class ExamplesBottomStagger extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      openFlushed: false,
      openSingle: false,
      openDouble: false
    }
  }

  handleOpen = (name) => {
    this.setState({ [name]: true })
  }

  handleClose = (name) => {
    this.setState({
      openFlushed: false,
      openSingle: false,
      openDouble: false
    })
  }

  render () {
    const {
      openFlushed,
      openSingle,
      openDouble
    } = this.state
    return (
      <>
        <DsStack direction='row' spacing='var(--ds-spacing-hot)'>
          <DsButton onClick={() => this.handleOpen('openFlushed')}>Flushed</DsButton>
          <DsButton onClick={() => this.handleOpen('openSingle')}>Single</DsButton>
          <DsButton onClick={() => this.handleOpen('openDouble')}>Double</DsButton>
        </DsStack>
        <DsBottomStagger
          kicker='kicker'
          title='Title'
          open={openFlushed}
          onClose={this.handleClose}
          buttonGroup={
            <DsButtonGroup
              noPadding
            >
              <DsButton
                variant='flushed'
                size='medium'
                color='primary'
              >
                openFlushed
              </DsButton>
            </DsButtonGroup>
          }
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </DsBottomStagger>
        <DsBottomStagger
          kicker='kicker'
          title='Title'
          open={openSingle}
          onClose={this.handleClose}
          buttonGroup={
            <DsButtonGroup>
              <DsButton
                variant='contained'
                size='medium'
                color='primary'
              >
                openSingle
              </DsButton>
            </DsButtonGroup>
          }
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </DsBottomStagger>
        <DsBottomStagger
          kicker='kicker'
          title='Title'
          open={openDouble}
          onClose={this.handleClose}
          buttonGroup={
            <DsButtonGroup>
              <DsButton
                variant='contained'
                size='medium'
                color='secondary'
              >
                CloseDouble
              </DsButton>
              <DsButton
                variant='contained'
                size='medium'
                color='primary'
              >
                openSingle
              </DsButton>
            </DsButtonGroup>
          }
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </DsBottomStagger>
      </>
    )
  }
}
