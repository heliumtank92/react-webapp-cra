import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import DsPaper from '../Components/DsPaper'
import DsBox from '../Components/DsBox'
import DsAccordion from '../Components/DsAccordion'
import DsStack from '../Components/DsStack'

class ExamplesAccordion extends Component {
  render () {
    return (
      <>
        <DsPaper sx={{ p: 'var(--ds-spacing-mild)' }}>
          <DsAccordion
            header={<DsBox>First </DsBox>}
            summary={
              <DsBox>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae reiciendis vitae ducimus, molestias odit assumenda
                magnam labore modi asperiores aspernatur consectetur deserunt
                libero animi repudiandae eum, consequuntur dolore ratione.
                Ipsa.
              </DsBox>
            }
          />
          <DsAccordion
            header={<DsBox>Second </DsBox>}
            summary={
              <DsBox>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                eius provident, laudantium et molestias iusto animi libero
                corrupti non reprehenderit. Perferendis voluptates sed
                dignissimos officiis, ducimus molestias rem tenetur facere.
              </DsBox>
            }
          />
          <DsAccordion
            header={<DsBox>Third </DsBox>}
            summary={
              <DsBox>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                eius provident, laudantium et molestias iusto animi libero
                corrupti non reprehenderit. Perferendis voluptates sed
                dignissimos officiis, ducimus molestias rem tenetur facere.
              </DsBox>
            }
          />
        </DsPaper>
        <DsPaper sx={{ p: 'var(--ds-spacing-mild)', mt: 'var(--ds-spacing-mild)' }}>
          <DsAccordion
            header={<DsBox>Header </DsBox>}
            summary={
              <DsBox>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                eius provident, laudantium et molestias iusto animi libero
                corrupti non reprehenderit. Perferendis voluptates sed
                dignissimos officiis, ducimus molestias rem tenetur facere.
              </DsBox>
            }
          />
        </DsPaper>
      </>
    )
  }
}

ExamplesAccordion.propTypes = {}

export default ExamplesAccordion
