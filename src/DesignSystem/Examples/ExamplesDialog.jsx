import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Typography } from '@mui/material'
import DsDialogue from '../Components/DsDialogue'
import { Stack } from '@mui/system'

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
    this.handleFlushedTripleButtonOpen =
      this.handleFlushedTripleButtonOpen.bind(this)
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
      <Grid container spacing={2}>
        <Grid item>
          <Stack direction='row' spacing={2}>
            <Button onClick={this.handleSingleButtonOpen}>Single</Button>
            <Button onClick={this.handleDoubleButtonOpen}>Double</Button>
            <Button onClick={this.handleTripleButtonOpen}>Triple</Button>
            <Button onClick={this.handleFlushedButtonOpen}>Flushed</Button>
            <Button onClick={this.handleFlushedTripleButtonOpen}>
              Flushed Triple
            </Button>
          </Stack>

          <DsDialogue
            open={singleButtonOpen}
            headerText='Single Button'
            primaryActionButton={<Button>Primary Action</Button>}
            onClose={this.handleClose}
            textOnly
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            nulla leo rutrum nisl in. Ac vitae tempor diam maecenas eget at
            quam. Neque orci arcu amet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Auctor nulla leo rutrum nisl in. Ac vitae tempor
            diam maecenas eget at quam. Neque orci arcu amet. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Auctor nulla leo rutrum nisl
            in. Ac vitae tempor diam maecenas eget at quam. Neque orci arcu
            amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Auctor nulla leo rutrum nisl in. Ac vitae tempor diam maecenas eget
            at quam. Neque orci arcu amet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Auctor nulla leo rutrum nisl in. Ac
            vitae tempor diam maecenas eget at quam. Neque orci arcu amet. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Auctor nulla leo
            rutrum nisl in. Ac vitae tempor diam maecenas eget at quam. Neque
            orci arcu amet. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Auctor nulla leo rutrum nisl in. Ac vitae tempor diam maecenas
            eget at quam. Neque orci arcu amet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Auctor nulla leo rutrum nisl in. Ac
            vitae tempor diam maecenas eget at quam. Neque orci arcu amet. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Auctor nulla leo
            rutrum nisl in. Ac vitae tempor diam maecenas eget at quam. Neque
            orci arcu amet. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Auctor nulla leo rutrum nisl in. Ac vitae tempor diam maecenas
            eget at quam. Neque orci arcu amet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Auctor nulla leo rutrum nisl in. Ac
            vitae tempor diam maecenas eget at quam. Neque orci arcu amet.
          </DsDialogue>
          <DsDialogue
            open={doubleButtonOpen}
            headerText='Flushed Button'
            primaryActionButton={<Button>Primary Action</Button>}
            secondaryActionButton={
              <Button color='secondary'>Secondary Action</Button>
            }
            onClose={this.handleClose}
          >
            Flushed Button
          </DsDialogue>
          <DsDialogue
            open={doubleButtonOpen}
            headerText='Flushed Button'
            primaryActionButton={<Button>Primary Action</Button>}
            secondaryActionButton={
              <Button color='secondary'>Secondary Action</Button>
            }
            onClose={this.handleClose}
          >
            Flushed Button
          </DsDialogue>
          <DsDialogue
            open={tripleButtonOpen}
            headerText='Flushed Button'
            primaryActionButton={<Button>Primary Action</Button>}
            secondaryActionButton={
              <Button color='secondary'>Secondary Action</Button>
            }
            tertiaryActionComponennt={
              <Typography variant='supportRegularInfo'>
                By choosing to agree, I agree to accept all applicable
                <Typography variant='inherit' component='span' color='primary'>
                  {' '}
                  Terms & Conditions{' '}
                </Typography>
                and
                <Typography variant='inherit' component='span' color='primary'>
                  {' '}
                  Privacy Policy
                </Typography>
                .
              </Typography>
            }
            onClose={this.handleClose}
          >
            Flushed Button
          </DsDialogue>
          <DsDialogue
            open={flushedButtonOpen}
            headerText='Flushed Button'
            flushedActionButton={<Button>Primary Action</Button>}
            onClose={this.handleClose}
          >
            Flushed Button
          </DsDialogue>
          <DsDialogue
            open={flushedTripleButtonOpen}
            headerText='Flushed Button'
            flushedActionButton={<Button>Primary Action</Button>}
            tertiaryActionComponennt={
              <Typography variant='supportRegularInfo'>
                By choosing to agree, I agree to accept all applicable
                <Typography variant='inherit' component='span' color='primary'>
                  {' '}
                  Terms & Conditions{' '}
                </Typography>
                and
                <Typography variant='inherit' component='span' color='primary'>
                  {' '}
                  Privacy Policy
                </Typography>
                .
              </Typography>
            }
            onClose={this.handleClose}
          >
            Flushed Button
          </DsDialogue>
        </Grid>
      </Grid>
    )
  }
}

export default ExamplesDialog

ExamplesDialog.propTypes = {}

ExamplesDialog.defaultProps = {}
