import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DsTag from '../Components/DsTag'
import { Box, Chip, FormHelperText, Grid, Paper } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

const tags = [
  {
    name: 'Annual Gross Income',
    id: 1
  },
  {
    name: 'Net Worth',
    id: 1
  },
  {
    name: 'Testing',
    id: 1
  }
]
class ExamplesTag extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tag: ''
    }
  }

  render () {
    const { tag } = this.state

    return (
      <Paper sx={{ p: 6, backgroundColor: 'inherit' }}>
        <Box p={2}>
          {tags.map((val, ind) => {
            return (
              <DsTag
                key={ind}
                icon={<StarIcon />}
                label={val.name}
                color='secondary'
                onClick={(e, v) => this.setState({ tag: val.name })}
                checked={val.name === tag}
              />
            )
          })}
        </Box>
      </Paper>
    )
  }
}

ExamplesTag.propTypes = {}

export default ExamplesTag
