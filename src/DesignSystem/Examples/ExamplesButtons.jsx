import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Paper, Button, Grid, Typography } from '@mui/material'

import SendIcon from '@mui/icons-material/Send'
import DsButtonGroup from '../Components/DsButtonGroup'
class ExamplesButtons extends PureComponent {
  render () {
    return (
      <>
        <Paper sx={{ p: 6, backgroundColor: 'inherit' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                size='large'
                // disabled
                type='submit'
              >
                Primary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='secondary'
                size='large'
                // disabled
                type='submit'
              >
                Secondary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                size='large'
                disabled
                type='submit'
              >
                Primary Disabled
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='secondary'
                size='large'
                disabled
                type='submit'
              >
                Secondary Disabled
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='flushed'
                size='large'
                color='primary'
                type='submit'
              >
                Flushed Primary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='flushed'
                size='large'
                disabled
                type='submit'
              >
                Flushed Disabled
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='flushed'
                size='large'
                disabled
                type='submit'
              >
                Flushed Disabled
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 6, backgroundColor: 'inherit' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                size='medium'
                // disabled
                type='submit'
              >
                Primary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='secondary'
                size='medium'
                // disabled
                type='submit'
              >
                Secondary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                size='medium'
                disabled
                type='submit'
              >
                Primary Disabled
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='secondary'
                size='medium'
                disabled
                type='submit'
              >
                Secondary Disabled
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='flushed'
                color='primary'
                size='medium'
                type='submit'
              >
                Flushed Primary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='flushed'
                size='medium'
                disabled
                type='submit'
              >
                Flushed Disabled
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 6, backgroundColor: 'inherit' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                size='small'
                // disabled
                type='submit'
              >
                Primary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='secondary'
                size='small'
                // disabled
                type='submit'
              >
                Secondary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                size='small'
                disabled
                type='submit'
              >
                Primary Disabled
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='secondary'
                size='small'
                disabled
                type='submit'
              >
                Secondary Disabled
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='flushed'
                color='primary'
                size='small'
                type='submit'
              >
                Flushed Primary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='flushed'
                size='small'
                disabled
                type='submit'
              >
                Flushed Disabled
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 6, backgroundColor: 'inherit' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant='text'
                color='secondary'
                size='small'
                // disabled
                type='submit'
              >
                Secondary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant='text' color='secondary' disabled type='submit'>
                Secondary Disabled
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 6, backgroundColor: 'inherit' }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button variant='contained' fullWidth endIcon={<SendIcon />}>
                Send
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant='contained'
                fullWidth
                size='medium'
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                variant='contained'
                size='large'
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 6, backgroundColor: 'inherit' }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button variant='contained' fullWidth startIcon={<SendIcon />}>
                Send
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant='contained'
                fullWidth
                size='medium'
                startIcon={<SendIcon />}
              >
                Send
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                variant='contained'
                size='large'
                startIcon={<SendIcon />}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 6, backgroundColor: 'inherit' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <DsButtonGroup
                primaryActionButton={
                  <Button
                    variant='contained'
                    size='medium'
                    startIcon={<SendIcon />}
                  >
                    complete setup
                  </Button>
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <DsButtonGroup
                primaryActionButton={
                  <Button
                    variant='contained'
                    size='medium'
                    startIcon={<SendIcon />}
                  >
                    complete setup
                  </Button>
                }
                secondaryActionButton={
                  <Button
                    variant='contained'
                    size='medium'
                    startIcon={<SendIcon />}
                    color='secondary'
                  >
                    Close
                  </Button>
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <DsButtonGroup
                primaryActionButton={
                  <Button
                    variant='contained'
                    size='medium'
                    startIcon={<SendIcon />}
                  >
                    complete setup
                  </Button>
                }
                secondaryActionButton={
                  <Button
                    variant='contained'
                    size='medium'
                    startIcon={<SendIcon />}
                    color='secondary'
                  >
                    Close
                  </Button>
                }
                tertiaryActionComponennt={
                  <Typography variant='supportRegularInfo'>
                    By choosing to agree, I agree to accept all applicable
                    <Typography
                      variant='inherit'
                      component='span'
                      color='primary'
                    >
                      {' '}
                      Terms & Conditions{' '}
                    </Typography>
                    and
                    <Typography
                      variant='inherit'
                      component='span'
                      color='primary'
                    >
                      {' '}
                      Privacy Policy
                    </Typography>
                    .
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <DsButtonGroup
                disablePadding
                primaryActionButton={
                  <Button
                    variant='flushed'
                    size='medium'
                    startIcon={<SendIcon />}
                  >
                    complete setup
                  </Button>
                }
                tertiaryActionComponennt={
                  <Typography variant='supportRegularInfo'>
                    By choosing to agree, I agree to accept all applicable
                    <Typography
                      variant='inherit'
                      component='span'
                      color='primary'
                    >
                      {' '}
                      Terms & Conditions{' '}
                    </Typography>
                    and
                    <Typography
                      variant='inherit'
                      component='span'
                      color='primary'
                    >
                      {' '}
                      Privacy Policy
                    </Typography>
                    .
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <DsButtonGroup
                disablePadding
                primaryActionButton={
                  <Button
                    variant='flushed'
                    size='medium'
                    startIcon={<SendIcon />}
                  >
                    complete setup
                  </Button>
                }
              />
            </Grid>
          </Grid>
        </Paper>
      </>
    )
  }
}

export default ExamplesButtons

ExamplesButtons.propTypes = {
  state: PropTypes.object,
  onInputChange: PropTypes.func,
  onLogin: PropTypes.func
}

ExamplesButtons.defaultProps = {
  state: {},
  onInputChange: () => undefined,
  onLogin: () => undefined
}
