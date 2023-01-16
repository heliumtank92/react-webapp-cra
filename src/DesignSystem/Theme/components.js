import { inputLabelClasses, inputBaseClasses } from '@mui/material'

const DRAWER_WIDTH = 240
const MINI_DRAWER_WIDTH = 56
export default function getComponents (dsTypo, calculateLinerHeight) {
  const components = {
    MuiListItemButton: {
      variants: [
        {
          props: { dsVariant: 'mini-drawer' },
          style: {
            paddingLeft: 'var(--ds-spacing-zero)'
          }
        }
      ]
    },
    MuiListItemIcon: {
      variants: [
        {
          props: { dsVariant: 'mini-drawer' },
          style: {
            width: MINI_DRAWER_WIDTH
          }
        }
      ]
    },
    MuiDrawer: {
      variants: [
        {
          props: { dsVariant: 'mini-drawer' },
          style: ({ ownerState, theme }) => {
            return {
              width: DRAWER_WIDTH,
              flexShrink: 0,
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
              ...(ownerState.open && {
                width: DRAWER_WIDTH,
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen
                }),
                overflowX: 'hidden',
                '& .MuiDrawer-paper': {
                  width: DRAWER_WIDTH,
                  transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen
                  }),
                  overflowX: 'hidden'
                }
              }),
              ...(!ownerState.open && {
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen
                }),
                overflowX: 'hidden',
                width: 0,
                [theme.breakpoints.up('sm')]: {
                  width: MINI_DRAWER_WIDTH
                },
                '& .MuiDrawer-paper': {
                  transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                  }),
                  overflowX: 'hidden',
                  width: 0,
                  [theme.breakpoints.up('sm')]: {
                    width: MINI_DRAWER_WIDTH
                  }
                }
              })
            }
          }
        }
      ],
      styleOverrides: {
        paper: {
          backgroundColor: 'var(--ds-color-surfaceBackground)'
        }
      }
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: 'app-bar' },
          style: {
            padding: 'var(--ds-spacing-deepfreeze)',
            height: 'var(--ds-rules-appBarIconBtnHeight)',
            width: 'var(--ds-rules-appBarIconBtnWidth)',
            fontSize: 'var(--ds-rules-appBarIconBtnFontSize)',
            color: 'inherit',
            '> * ': {
              height: '100% !important',
              width: '100% !important',
              fontSize: 'inherit !important'
            }
          }
        }
      ]
    },
    // Appbar Component
    MuiAppBar: {
      variants: [
        {
          props: { dsVariant: 'mini-drawer' },
          style: ({ ownerState, theme }) => {
            return {
              zIndex: theme.zIndex.drawer + 1,
              transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
              }),
              ...(ownerState.open && {
                marginLeft: DRAWER_WIDTH,
                width: `calc(100% - ${DRAWER_WIDTH}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen
                })
              })
            }
          }
        }
      ],
      defaultProps: {
        color: 'surface',
        enableColorOnDark: true,
        elevation: 0
      },
      styleOverrides: {
        root: {
          borderWidth: '1px',
          borderStyle: 'solid'
        },
        colorSurface: {
          borderColor: 'var(--ds-color-strokeDefault)'
        },
        colorPrimary: {
          borderColor: 'var(--ds-color-actionPrimary)'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 'var(--ds-spacing-bittercold)',
          minHeight: 'var(--ds-rules-appBarMobileMinHeight)',
          '@media (min-width: 0px)': {
            padding: 'var(--ds-spacing-bittercold)',
            minHeight: 'var(--ds-rules-appBarMobileMinHeight)'
          }
        }
      }
    },
    // Alert Component
    MuiAlert: {
      defaultProps: {
        variant: 'filled',
        icon: false
      },
      styleOverrides: {
        root: {
          borderRadius: '4px',
          borderWidth: '1px',
          borderStyle: 'solid',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
        },
        filled: {
          color: 'var(--ds-color-typoOnSurface)'
        },
        filledSuccess: {
          borderColor: 'var(--ds-color-supportPositive)',
          backgroundColor: 'var(--ds-color-supportPositive)'
        },
        filledInfo: {
          borderColor: 'var(--ds-color-supportTypical)',
          backgroundColor: 'var(--ds-color-supportTypical)'
        },
        filledWarning: {
          borderColor: 'var(--ds-color-supportWarning)',
          backgroundColor: 'var(--ds-color-supportWarning)'
        },
        filledError: {
          borderColor: 'var(--ds-color-supportNegative)',
          backgroundColor: 'var(--ds-color-supportNegative)'
        },
        outlined: {
          borderColor: 'var(--ds-color-surfaceBackground)',
          backgroundColor: 'var(--ds-color-surfaceBackground)'
        },
        outlinedSuccess: {
          color: 'var(--ds-color-supportPositive)'
        },
        outlinedInfo: {
          color: 'var(--ds-color-supportTypical)'
        },
        outlinedWarning: {
          color: 'var(--ds-color-supportWarning)'
        },
        outlinedError: {
          color: 'var(--ds-color-supportNegative)'
        }
      }
    },

    // Chip Component
    MuiChip: {
      defaultProps: {
        size: 'small',
        type: 'status'
      },
      variants: [
        {
          props: { type: 'status' },
          style: {
            backgroundColor: 'var(--ds-color-supportTypical)',
            color: 'var(--ds-color-typoOnSurface)'
          }
        },
        {
          props: { type: 'status', color: 'success' },
          style: {
            backgroundColor: 'var(--ds-color-supportPositive)'
          }
        },
        {
          props: { type: 'status', color: 'warning' },
          style: {
            backgroundColor: 'var(--ds-color-supportWarning)'
          }
        },
        {
          props: { type: 'status', color: 'pending' },
          style: {
            backgroundColor: 'var(--ds-color-supportPending)'
          }
        },
        {
          props: { type: 'status', color: 'error' },
          style: {
            backgroundColor: 'var(--ds-color-supportNegative)'
          }
        },
        {
          props: { type: 'status', color: 'info' },
          style: {
            backgroundColor: 'var(--ds-color-neutral1)',
            color: 'var(--ds-color-typoPrimary)'
          }
        },
        {
          props: { type: 'nudge' },
          style: {
            paddingTop: 'var(--ds-spacing-deepfreeze)',
            paddingBottom: 'var(--ds-spacing-deepfreeze)',
            textTransform: 'none'
          }
        },
        {
          props: { type: 'nudge', color: 'default' },
          style: {
            backgroundColor: 'var(--ds-color-supportDefaultNeutral)',
            color: 'var(--ds-color-supportTypical)'
          }
        },
        {
          props: { type: 'nudge', color: 'success' },
          style: {
            backgroundColor: 'var(--ds-color-supportPositiveNeutral)',
            color: 'var(--ds-color-supportPositive)'
          }
        },
        {
          props: { type: 'nudge', color: 'warning' },
          style: {
            backgroundColor: 'var(--ds-color-supportWarningNeutral)',
            color: 'var(--ds-color-supportWarning)'
          }
        },
        {
          props: { type: 'nudge', color: 'pending' },
          style: {
            backgroundColor: 'var(--ds-color-supportPendingNeutral)',
            color: 'var(--ds-color-supportPending)'
          }
        },
        {
          props: { type: 'nudge', color: 'error' },
          style: {
            backgroundColor: 'var(--ds-color-supportNegativeNeutral)',
            color: 'var(--ds-color-supportNegative)'
          }
        },
        {
          props: { type: 'nudge', color: 'info' },
          style: {
            backgroundColor: 'var(--ds-color-neutral1)',
            color: 'var(--ds-color-typoPrimary)'
          }
        }
      ],
      styleOverrides: {
        root: {
          ...dsTypo.supportRegularMetadata,
          color: 'var(--ds-color-typoOnSurface)',
          borderRadius: '4px'
        },
        sizeSmall: {
          paddingLeft: 'var(--ds-spacing-glacial)',
          paddingRight: 'var(--ds-spacing-glacial)',
          paddingTop: 'var(--ds-spacing-quickfreeze)',
          paddingBottom: 'var(--ds-spacing-quickfreeze)',
          height: '20px'
        },
        iconSmall: {
          fontSize: dsTypo.fontsizeIceage,
          margin: 'var(--ds-spacing-zero)',
          marginRight: 'var(--ds-spacing-quickfreeze)',
          color: 'inherit'
        },
        labelSmall: {
          padding: 'var(--ds-spacing-zero)'
        }
      }
    },

    // Dialog Component
    MuiDialog: {
      defaultProps: {
        scroll: 'paper',
        maxWidth: 'xs',
        fullWidth: true
      },
      styleOverrides: {
        paper: {
          backgroundcolor: 'var(--ds-color-surfacePrimary)',
          borderRadius: '16px',
          boxShadow: '0px 24px 40px rgba(0, 0, 0, 0.08)'
        },
        paperWidthXs: {
          maxWidth: 'var(--ds-rules-dialogXsMaxWidth)'
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          ...dsTypo.headingBoldSmall,
          color: 'var(--ds-color-typoPrimary)',
          paddingLeft: 'var(--ds-spacing-bittercold)',
          paddingRight: 'var(--ds-spacing-bittercold)',
          paddingBottom: 'var(--ds-spacing-bittercold)',
          paddingTop: 'var(--ds-spacing-mild)',
          textAlign: 'center'
        }
      }
    },
    MuiDialogContent: {
      variants: [
        {
          props: { textOnly: true },
          style: {
            ...dsTypo.bodyRegularMedium,
            paddingBottom: 'var(--ds-spacing-glacial)',
            textAlign: 'center'
          }
        }
      ],
      styleOverrides: {
        root: {
          color: 'var(--ds-color-typoTertiary)',
          paddingLeft: 'var(--ds-spacing-bittercold)',
          paddingRight: 'var(--ds-spacing-bittercold)',
          paddingBottom: 'var(--ds-spacing-mild)'
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 'var(--ds-spacing-zero)',
          '> *': {
            flex: 1
          }
        }
      }
    },

    // Avatar Component
    MuiAvatar: {
      variants: [
        {
          props: { size: 'S' },
          style: {
            width: 'var(--ds-rules-avatarSSize)',
            height: 'var(--ds-rules-avatarSSize)'
          }
        },
        {
          props: { size: 'M' },
          style: {
            width: 'var(--ds-rules-avatarMSize)',
            height: 'var(--ds-rules-avatarMSize)'
          }
        },
        {
          props: { size: 'L' },
          style: {
            width: 'var(--ds-rules-avatarLSize)',
            height: 'var(--ds-rules-avatarLSize)'
          }
        },
        {
          props: { size: 'XL' },
          style: {
            width: 'var(--ds-rules-avatarXLSize)',
            height: 'var(--ds-rules-avatarXLSize)'
          }
        },
        {
          props: { size: 'XXL' },
          style: {
            width: 'var(--ds-rules-avatarXXLSize)',
            height: 'var(--ds-rules-avatarXXLSize)'
          }
        },
        {
          props: { size: '3XL' },
          style: {
            width: 'var(--ds-rules-avatar3XLSize)',
            height: 'var(--ds-rules-avatar3XLSize)'
          }
        }
      ],
      defaultProps: {
        size: 'L'
      }
    },

    // Input Component
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: 'var(--ds-color-iconDefault)',
          '& .MuiSvgIcon-root': {
            cursor: 'pointer'
          }
        }
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'small'
      }
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
        color: 'primary'
      },
      styleOverrides: {
        root: {
          ...dsTypo.bodyRegularMedium,
          position: 'relative',
          transform: dsTypo.casingNone,
          marginBottom: 'var(--ds-spacing-glacial)',
          color: 'var(--ds-color-typoPrimary)',
          [`&.${inputLabelClasses.focused}:not(.${inputLabelClasses.disabled})`]: {
            color: 'var(--ds-color-typoPrimary)'
          },
          '&.MuiFormLabel-colorSuccess': {
            color: 'var(--ds-color-supportPositive)'
          },
          [`&.${inputLabelClasses.focused}.MuiFormLabel-colorSuccess`]: {
            color: 'var(--ds-color-supportPositive)'
          },
          [`&.${inputLabelClasses.error}`]: {
            color: 'var(--ds-color-supportNegative)'
          },
          [`&.${inputLabelClasses.focused}.${inputLabelClasses.error}`]: {
            color: 'var(--ds-color-supportNegative)'
          }
        }
      }
    },
    MuiInputBase: {
      defaultProps: {
      },
      styleOverrides: {
        root: {
          height: '44px',
          background: 'var(--ds-color-surfacePrimary)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'var(--ds-color-strokeDefault)',
          borderRadius: '4px',
          padding: 'var(--ds-spacing-frostbite) var(--ds-spacing-glacial)',
          [`&.${inputBaseClasses.focused}:not(.${inputBaseClasses.disabled})`]: {
            borderColor: 'var(--ds-color-strokeActive)'
          },
          '&.MuiInputBase-colorSuccess': {
            borderColor: 'var(--ds-color-supportPositive)'
          },
          [`&.${inputBaseClasses.focused}.MuiInputBase-colorSuccess`]: {
            borderColor: 'var(--ds-color-supportPositive)'
          },
          [`&.${inputBaseClasses.disabled}`]: {
            background: 'var(--ds-color-stateDisabledSurface)',
            borderColor: 'var(--ds-color-strokeDisabled)'
          },
          [`&.${inputBaseClasses.error}`]: {
            borderColor: 'var(--ds-color-supportNegative)'
          },
          [`&.${inputBaseClasses.focused}.${inputBaseClasses.error}`]: {
            borderColor: 'var(--ds-color-supportNegative)'
          },
          '&.MuiInputBase-readOnly': {
            background: 'var(--ds-color-stateDisabledSurface)',
            borderColor: 'var(--ds-color-strokeDisabled)',
            pointerEvents: 'none'
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: 'var(--ds-spacing-zero)',
          marginTop: 'var(--ds-spacing-deepfreeze)',
          paddingLeft: 'var(--ds-spacing-deepfreeze)',
          paddingTop: 'var(--ds-spacing-deepfreeze)',
          paddingBottom: 'var(--ds-spacing-deepfreeze)'
        }
      }
    },

    // Card Component
    MuiPaper: {
      defaultProps: {
        elevation: 1
      }
    },

    // Button Component
    MuiButton: {
      variants: [
        {
          props: { variant: 'flushed' },
          style: {
            borderRadius: 0
          }
        },
        {
          props: { variant: 'flushed', color: 'primary' },
          style: {
            color: 'var(--ds-color-typoOnSurface)',
            backgroundColor: 'var(--ds-color-actionPrimary)',
            '&:hover': {
              backgroundColor: 'var(--ds-color-actionPrimary)',
              boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)'
            }
          }
        },
        {
          props: { variant: 'flushed', color: 'primary', disabled: true },
          style: {
            backgroundColor: 'var(--ds-color-stateUnselected)'
          }
        }
      ],
      defaultProps: {
        variant: 'contained',
        size: 'small',
        color: 'primary',
        disableElevation: true,
        focusRipple: true
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none'
        },
        text: {
          '&:disabled': {
            color: 'var(--ds-color-typoDisabled)'
          },
          '&:hover': {
            background: 'transparent'
          }
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: 'var(--ds-color-actionPrimary)',
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)'
          }
        },
        containedSecondary: {
          backgroundColor: 'var(--ds-color-surfaceSecondary)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'var(--ds-color-strokeDefault)',
          color: 'var(--ds-color-actionPrimary)',
          '&:hover': {
            backgroundColor: 'var(--ds-color-surfaceSecondary)',
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)'
          },
          '&:disabled': {
            backgroundColor: 'var(--ds-color-surfaceSecondary)',
            color: 'var(--ds-color-typoDisabled)'
          }
        },
        textSizeSmall: {
          paddingX: 'var(--ds-spacing-quickfreeze)',
          paddingY: 'var(--ds-spacing-glacial)',
          height: '28px'
        },
        sizeLarge: {
          padding: 'var(--ds-spacing-bittercold)',
          height: '56px',
          fontSize: dsTypo.fontsizeBittercold,
          lineHeight: calculateLinerHeight(dsTypo.fontsizeBittercold, dsTypo.lineheightZero)
        },
        sizeMedium: {
          paddingX: 'var(--ds-spacing-bittercold)',
          paddingY: 'var(--ds-spacing-frostbite)',
          height: '48px',
          fontSize: dsTypo.fontsizeFrigid,
          lineHeight: calculateLinerHeight(dsTypo.fontsizeFrigid, dsTypo.lineheightZero)
        },
        sizeSmall: {
          paddingX: 'var(--ds-spacing-bittercold)',
          paddingY: 'var(--ds-spacing-glacial)',
          height: '34px',
          fontSize: dsTypo.fontsizeFrostbite,
          lineHeight: calculateLinerHeight(dsTypo.fontsizeFrostbite, dsTypo.lineheightZero)
        },
        startIcon: {
          marginRight: 'var(--ds-spacing-quickfreeze)',
          '*:nth-of-type(1)': {
            fontSize: 'inherit'
          }
        },
        endIcon: {
          marginLeft: 'var(--ds-spacing-quickfreeze)',
          '*:nth-of-type(1)': {
            fontSize: 'inherit'
          }
        }
      }
    }
  }

  return components
}
