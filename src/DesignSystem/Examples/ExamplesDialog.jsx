import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import DsGrid from '../Components/DsGrid'
import DsStack from '../Components/DsStack'
import DsTypo from '../Components/DsTypo'
import DsDialog from '../Components/DsDialog'
import DsLink from '../Components/DsLink'
import DsButtonGroup from '../Components/DsButtonGroup'
import DsButton from '../Components/DsButton'

class ExamplesDialog extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      singleButtonOpen: false,
      doubleButtonOpen: false,
      tripleButtonOpen: false,
      flushedButtonOpen: false,
      flushedTripleButtonOpen: false
    }

    this.handleSingleButtonOpen = this.handleSingleButtonOpen.bind(this)
    this.handleDoubleButtonOpen = this.handleDoubleButtonOpen.bind(this)
    this.handleTripleButtonOpen = this.handleTripleButtonOpen.bind(this)
    this.handleFlushedButtonOpen = this.handleFlushedButtonOpen.bind(this)
    this.handleFlushedTripleButtonOpen = this.handleFlushedTripleButtonOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleSingleButtonOpen () {
    this.setState({ singleButtonOpen: true })
  }

  handleDoubleButtonOpen () {
    this.setState({ doubleButtonOpen: true })
  }

  handleTripleButtonOpen () {
    this.setState({ tripleButtonOpen: true })
  }

  handleFlushedButtonOpen () {
    this.setState({ flushedButtonOpen: true })
  }

  handleFlushedTripleButtonOpen () {
    this.setState({ flushedTripleButtonOpen: true })
  }

  handleClose () {
    this.setState({
      singleButtonOpen: false,
      doubleButtonOpen: false,
      tripleButtonOpen: false,
      flushedButtonOpen: false,
      flushedTripleButtonOpen: false
    })
  }

  render () {
    const {
      singleButtonOpen,
      doubleButtonOpen,
      tripleButtonOpen,
      flushedButtonOpen,
      flushedTripleButtonOpen
    } = this.state

    return (
      <DsGrid container spacing={2}>
        <DsGrid item>
          <DsStack direction='row' spacing={2}>
            <DsButton onClick={this.handleSingleButtonOpen}>Single</DsButton>
            <DsButton onClick={this.handleDoubleButtonOpen}>Double</DsButton>
            {/* <DsButton onClick={this.handleTripleButtonOpen}>Triple</DsButton> */}
            <DsButton onClick={this.handleFlushedButtonOpen}>Flushed</DsButton>
            <DsButton onClick={this.handleFlushedTripleButtonOpen}>
              Flushed Triple
            </DsButton>
          </DsStack>

          <DsDialog
            open={singleButtonOpen}
            heading='Single Button'
            onClose={this.handleClose}
            buttonGroup={
              <DsButtonGroup>
                <DsButton>Primary Action</DsButton>
              </DsButtonGroup>
            }
            // textOnly
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nulla leo rutrum nisl in. Ac vitae tempor diam maecenas eget at quam. Neque orci arcu amet.'
          />
          <DsDialog
            open={doubleButtonOpen}
            heading='Double Button'
            onClose={this.handleClose}
            buttonGroup={
              <DsButtonGroup>
                <DsButton color='secondary'>Secondary Action</DsButton>
                <DsButton>Primary Action</DsButton>
              </DsButtonGroup>
            }
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nulla leo rutrum nisl in. Ac vitae tempor diam maecenas eget at quam. Neque orci arcu amet.'
          />
          {/* <DsDialog
            open={tripleButtonOpen}
            heading='Tripple Button'
            onClose={this.handleClose}
            buttonGroup={
              <DsButtonGroup
                primaryActionButton={<DsButton>Primary Action</DsButton>}
                secondaryActionButton={
                  <DsButton color='secondary'>Secondary Action</DsButton>
                }
                tertiaryActionComponent={
                  <DsTypo variant='supportRegularInfo'>
                    By choosing to agree, I agree to accept all applicable&nbsp;
                    <DsLink variant='inherit'>
                      Terms & Conditions
                    </DsLink>
                    &nbsp;and&nbsp;
                    <DsLink variant='inherit'>
                      Privacy Policy
                    </DsLink>
                    .
                  </DsTypo>
                }
              />
            }
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nulla leo rutrum nisl in. Ac vitae tempor diam maecenas eget at quam. Neque orci arcu amet.'
          /> */}
          <DsDialog
            open={flushedButtonOpen}
            heading='Flushed Button'
            onClose={this.handleClose}
            buttonGroup={
              <DsButtonGroup>
                <DsButton variant='flushed'>Primary Action</DsButton>
              </DsButtonGroup>
            }
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nulla leo rutrum nisl in. Ac vitae tempor diam maecenas eget at quam. Neque orci arcu amet.'
          />
          {/* <DsDialog
            open={flushedTripleButtonOpen}
            heading='Flushed Triple Button'
            onClose={this.handleClose}
            buttonGroup={
              <DsButtonGroup
                flushed
                primaryActionButton={<DsButton variant='flushed'>Primary Action</DsButton>}
                tertiaryActionComponent={
                  <DsTypo variant='supportRegularInfo'>
                    By choosing to agree, I agree to accept all applicable&nbsp;
                    <DsLink variant='inherit'>
                      Terms & Conditions
                    </DsLink>
                    &nbsp;and&nbsp;
                    <DsLink variant='inherit'>
                      Privacy Policy
                    </DsLink>
                    .
                  </DsTypo>
                }
              />
            }

            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nulla leo rutrum nisl in. Ac vitae tempor diam maecenas eget at quam. Neque orci arcu amet.'
          /> */}
        </DsGrid>
      </DsGrid>
    )
  }
}

export default ExamplesDialog
