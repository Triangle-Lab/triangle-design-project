import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from '.'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon'
library.add(fas)

export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = (): void => {
    if ((context.onSelect != null) && !(disabled ?? false) && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <li className = {classes} style = {style} onClick= { handleClick }>
      {children}
    </li>
    
  )
}

export default MenuItem
