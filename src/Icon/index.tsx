import React from 'react'
import classNames from 'classnames'
// import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
// import { type } from 'os'

export type ThemeProps = 'primart' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
  className?: string
}

const Icon: React.FC<IconProps> = (props) => {
  // incon-primary
  const { className, theme, ...resetProps } = props
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className= { classes} {...resetProps} />
  )
}

export default Icon
