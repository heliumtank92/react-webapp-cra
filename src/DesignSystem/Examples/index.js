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
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import AddCardIcon from '@mui/icons-material/AddCard'
import ToggleOffIcon from '@mui/icons-material/ToggleOff'
import SellIcon from '@mui/icons-material/Sell'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import ErrorIcon from '@mui/icons-material/Error'
import LabelIcon from '@mui/icons-material/Label'
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import GamepadIcon from '@mui/icons-material/Gamepad'
import ExamplesAccordion from './ExamplesAccordion'
import ExamplesToggle from './ExamplesSwitch'
import ExamplesSelect from './ExamplesSelect'
import ExamplesTag from './ExamplesTag'
import ExamplesRadio from './ExamplesRadio'

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
  },
  {
    Icon: ArrowDropDownCircleIcon,
    title: 'Accordion',
    componentId: 'ACCORDION'
  },
  {
    Icon: AddCardIcon,
    title: 'Card',
    componentId: 'CARD'
  },
  {
    Icon: ToggleOffIcon,
    title: 'Switch',
    componentId: 'SWITCH'
  },
  {
    Icon: GamepadIcon,
    title: 'Select',
    componentId: 'SELECT'
  },
  {
    Icon: SellIcon,
    title: 'Tag',
    componentId: 'TAG'
  },
  {
    Icon: RadioButtonUncheckedIcon,
    title: 'Radio',
    componentId: 'RADIO'
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
  BUTTONS: ExamplesButtons,
  ACCORDION: ExamplesAccordion,
  SWITCH: ExamplesToggle,
  SELECT: ExamplesSelect,
  TAG: ExamplesTag,
  RADIO: ExamplesRadio
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
