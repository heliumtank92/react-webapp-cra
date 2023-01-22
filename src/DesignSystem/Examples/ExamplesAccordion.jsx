import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DsAccordion from '../Components/DsAccordion'
import { Box, Grid, Paper, Typography } from '@mui/material'

class ExamplesAccordion extends Component {
  render () {
    return (
      <Paper sx={{ p: 6 }}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <DsAccordion
              header={<Box>Header </Box>}
              summary={
                <Box>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae reiciendis vitae ducimus, molestias odit assumenda
                  magnam labore modi asperiores aspernatur consectetur deserunt
                  libero animi repudiandae eum, consequuntur dolore ratione.
                  Ipsa.
                </Box>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <DsAccordion
              disabled
              header={<Box>Header </Box>}
              summary={
                <Box>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  eius provident, laudantium et molestias iusto animi libero
                  corrupti non reprehenderit. Perferendis voluptates sed
                  dignissimos officiis, ducimus molestias rem tenetur facere.
                </Box>
              }
            />
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

ExamplesAccordion.propTypes = {}

export default ExamplesAccordion
