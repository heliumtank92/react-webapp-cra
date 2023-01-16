import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ExamplesButtons from './ExamplesButtons'
import ExamplesTextField from './ExamplesTextField'
import ExamplesAvatars from './ExamplesAvatars'
import ExamplesDialog from './ExamplesDialog'
import ExamplesChips from './ExamplesChips'
import ExamplesAlerts from './ExamplesAlerts'
import ExamplesNotification from './ExamplesNotification'
import ExamplesAppBar from './ExamplesAppBar'

import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ErrorIcon from '@mui/icons-material/Error'
import LabelIcon from '@mui/icons-material/Label'
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import GamepadIcon from '@mui/icons-material/Gamepad'

const NAVLINKS = [
  {
    Icon: ViewHeadlineIcon,
    title: 'App Bar',
    componentId: 'APP_BAR'
  },
  {
    Icon: NotificationsIcon,
    title: 'Notifications',
    componentId: 'NOTIFICATIONS'
  },
  {
    Icon: ErrorIcon,
    title: 'Alerts',
    componentId: 'ALERTS'
  },
  {
    Icon: LabelIcon,
    title: 'Chips',
    componentId: 'CHIPS'
  },
  {
    Icon: PictureInPictureIcon,
    title: 'Dialog',
    componentId: 'DIALOG'
  },
  {
    Icon: AccessibilityIcon,
    title: 'Avatar',
    componentId: 'AVATAR'
  },
  {
    Icon: TextFieldsIcon,
    title: 'Text Fields',
    componentId: 'TEXTFIELDS'
  },
  {
    Icon: GamepadIcon,
    title: 'Buttons',
    componentId: 'BUTTONS'
  }
]

const COMPONENTS_MAP = {
  APP_BAR: ExamplesAppBar,
  NOTIFICATIONS: ExamplesNotification,
  ALERTS: ExamplesAlerts,
  CHIPS: ExamplesChips,
  DIALOG: ExamplesDialog,
  AVATAR: ExamplesAvatars,
  TEXTFIELDS: ExamplesTextField,
  BUTTONS: ExamplesButtons
}

export default class DsExample extends Component {
  render () {
    const { search } = window.location
    const componentId = search.split('componentId=')[1]
    const Component = COMPONENTS_MAP[componentId] || COMPONENTS_MAP.APP_BAR
    return <Component key={componentId} />
  }
}

export { NAVLINKS }
