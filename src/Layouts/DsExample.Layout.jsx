import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Outlet, UNSAFE_DataRouterContext } from 'react-router-dom'
import { NAVLINKS } from 'src/DesignSystem/Examples'
import AppBarWithMiniSideNav from 'src/DesignSystem/Layouts/AppBarWithMiniSideNav'

import MenuIcon from '@mui/icons-material/Menu'
import withRouter from 'src/Lib/withRouter'

class DsExampleLayout extends Component {
  static contextType = UNSAFE_DataRouterContext
  constructor (props) {
    super(props)

    this.handleNavlinkClick = this.handleNavlinkClick.bind(this)
  }

  handleNavlinkClick (navlink) {
    const { location, navigate } = this.props
    const route = `${location.pathname}?componentId=${navlink.componentId}`
    navigate(route)
  }

  render () {
    const { searchParams } = this.props
    const pageName = searchParams.get('componentId')
    return (
      <AppBarWithMiniSideNav
        sideNavProps={{
          navLinks: NAVLINKS,
          onNavlinkClick: this.handleNavlinkClick
        }}
        appBarProps={{
          leftIcon: <MenuIcon />,
          content: pageName
        }}
      >
        <Outlet key={searchParams} />
      </AppBarWithMiniSideNav>
    )
  }
}

export default withRouter(DsExampleLayout)
