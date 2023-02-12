import React, { Component } from 'react'

import ExamplesAccordion from './ExamplesAccordion'
import ExamplesAppBar from './ExamplesAppBar'
import ExamplesAvatars from './ExamplesAvatars'
import ExamplesBottomStagger from './ExamplesBottomStagger'
import ExamplesButtons from './ExamplesButtons'
import ExamplesChips from './ExamplesChips'
import ExamplesDialog from './ExamplesDialog'
import ExamplesFab from './ExamplesFab'
import ExamplesNotification from './ExamplesNotification'
import ExamplesProgressTracker from './ExamplesProgressTracker'
import ExamplesRadio from './ExamplesRadio'
import ExamplesSearchbar from './ExamplesSearchbar'
import ExamplesSelect from './ExamplesSelect'
import ExamplesSwitch from './ExamplesSwitch'
import ExamplesTag from './ExamplesTag'
import ExamplesTextField from './ExamplesTextField'
import ExamplesToasts from './ExamplesToasts'
import ExamplesToggle from './ExamplesToggle'
import ExamplesTootip from './ExamplesTootip'
import ExamplesDatePicker from './ExamplesDatePicker'

import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline'
import NotificationsIcon from '@mui/icons-material/Notifications'
import TimelineIcon from '@mui/icons-material/Timeline'
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
import SearchIcon from '@mui/icons-material/Search'
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop'
import CircleIcon from '@mui/icons-material/Circle'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const NAVLINKS = [
  { title: 'Accordion', componentId: 'ACCORDION', Icon: ArrowDropDownCircleIcon },
  { title: 'App Bar', componentId: 'APP_BAR', Icon: ViewHeadlineIcon },
  { title: 'Avatar', componentId: 'AVATAR', Icon: AccessibilityIcon },
  { title: 'Bottom Stagger', componentId: 'BOTTOM_STAGGER', Icon: VerticalAlignTopIcon },
  { title: 'Buttons', componentId: 'BUTTONS', Icon: GamepadIcon },
  { title: 'Card', componentId: 'CARD', Icon: AddCardIcon },
  { title: 'Chips', componentId: 'CHIPS', Icon: LabelIcon },
  { title: 'Dialog', componentId: 'DIALOG', Icon: PictureInPictureIcon },
  { title: 'Floating Action Button', componentId: 'FAB', Icon: CircleIcon },
  { title: 'Notifications', componentId: 'NOTIFICATIONS', Icon: NotificationsIcon },
  { title: 'Progress Tracker', componentId: 'PROGRESS_TRACKER', Icon: TimelineIcon },
  { title: 'Radio', componentId: 'RADIO', Icon: RadioButtonUncheckedIcon },
  { title: 'Searchbar', componentId: 'SEARCHBAR', Icon: SearchIcon },
  { title: 'Select', componentId: 'SELECT', Icon: GamepadIcon },
  { title: 'Switch', componentId: 'SWITCH', Icon: ToggleOffIcon },
  { title: 'Tag', componentId: 'TAG', Icon: SellIcon },
  { title: 'Text Fields', componentId: 'TEXTFIELDS', Icon: TextFieldsIcon },
  { title: 'Toasts', componentId: 'TOASTS', Icon: ErrorIcon },
  { title: 'Toggle', componentId: 'TOGGLE', Icon: ToggleOffIcon },
  { title: 'Tooltips', componentId: 'TOOLTIPS', Icon: ErrorIcon },
  { title: 'DatePicker', componentId: 'DATEPICKER', Icon: CalendarMonthIcon }
]

const COMPONENTS_MAP = {
  ACCORDION: ExamplesAccordion,
  APP_BAR: ExamplesAppBar,
  AVATAR: ExamplesAvatars,
  BOTTOM_STAGGER: ExamplesBottomStagger,
  BUTTONS: ExamplesButtons,
  CHIPS: ExamplesChips,
  DIALOG: ExamplesDialog,
  FAB: ExamplesFab,
  NOTIFICATIONS: ExamplesNotification,
  PROGRESS_TRACKER: ExamplesProgressTracker,
  RADIO: ExamplesRadio,
  SEARCHBAR: ExamplesSearchbar,
  SELECT: ExamplesSelect,
  SWITCH: ExamplesSwitch,
  TAG: ExamplesTag,
  TEXTFIELDS: ExamplesTextField,
  TOASTS: ExamplesToasts,
  TOGGLE: ExamplesToggle,
  TOOLTIPS: ExamplesTootip,
  DATEPICKER: ExamplesDatePicker
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
