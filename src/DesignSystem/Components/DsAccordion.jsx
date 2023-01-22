import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

class DsAccordion extends PureComponent {
  render () {
    const { header, summary, expandIcon } = this.props
    return (
      <Accordion>
        <AccordionSummary expandIcon={expandIcon || <ExpandMoreIcon />}>
          {header}
        </AccordionSummary>
        <AccordionDetails>{summary}</AccordionDetails>
      </Accordion>
    )
  }
}

DsAccordion.propTypes = {}

export default DsAccordion
