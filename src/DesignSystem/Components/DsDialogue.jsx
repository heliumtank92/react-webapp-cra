import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import DsButtonGroup from './DsButtonGroup'

export default class DsDialogue extends PureComponent {
  static propTypes = {
    headerText: PropTypes.string,
    open: PropTypes.bool,
    primaryActionButton: PropTypes.element,
    secondaryActionButton: PropTypes.element,
    tertiaryActionComponennt: PropTypes.element,
    flushedActionButton: PropTypes.element
  }

  static defaultProps = {
    open: false
  }

  render () {
    const {
      headerText,
      open,
      primaryActionButton,
      secondaryActionButton,
      tertiaryActionComponennt,
      flushedActionButton,
      textOnly,
      children,
      ...restDialogProps
    } = this.props

    const content = textOnly
      ? (
        <DialogContentText>
          {children}
        </DialogContentText>
        )
      : children

    const flushedButton = (flushedActionButton && React.cloneElement(flushedActionButton, { variant: 'flushed', size: 'medium' }))
    const primaryButton = (primaryActionButton && React.cloneElement(primaryActionButton, { size: 'medium' }))
    const secondaryButton = (secondaryActionButton && React.cloneElement(secondaryActionButton, { size: 'medium' }))

    return (
      <Dialog
        open={open}
        {...restDialogProps}
      >
        <DialogTitle>{headerText}</DialogTitle>
        <DialogContent textOnly={textOnly}>
          {content}
        </DialogContent>
        <DialogActions
          disableSpacing
        >
          <DsButtonGroup
            disablePadding={!!flushedActionButton}
            primaryActionButton={flushedButton || primaryButton}
            secondaryActionButton={secondaryButton}
            tertiaryActionComponennt={tertiaryActionComponennt}
          />
        </DialogActions>
      </Dialog>
    )
  }
}
