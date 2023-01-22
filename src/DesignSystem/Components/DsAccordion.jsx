import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

class DsAccordion extends PureComponent {
  static propTypes = {
    header: PropTypes.node,
    summary: PropTypes.node,
    ExpandIcon: PropTypes.node
  }

  static defaultProps = {
    ExpandIcon: ExpandMoreIcon
  }

  render () {
    const { header, summary, ExpandIcon } = this.props

    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          {header}
        </AccordionSummary>
        <AccordionDetails>{summary}</AccordionDetails>
      </Accordion>
    )
  }
}

export default DsAccordion
