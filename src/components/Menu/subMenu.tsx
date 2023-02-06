import React, { useState, createContext, useContext, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu' 
import { MenuItemProps } from './menuItem'
import { clear } from 'console'
import { hover } from '@testing-library/user-event/dist/hover'
import { openStdin } from 'process'

export interface subMenuProps {
  index?: string
  title: string
  className?: string
  children?: React.ReactNode
}

const SubMenu: React.FC<subMenuProps> = ( { index, title, children, className } ) => {
    const context = useContext(MenuContext)
    const openedSubMenus = context.defaultOpenSubmenus as Array<string>
    const isOpen = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
    const [ menuOpen, setOpen ] = useState(isOpen)
  const classes = classNames('menu-item submenu-item', className,{
    'is-active': context.index === index
  })
  const handleClick = (e:React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e:React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
        setOpen(toggle)
    }, 300)
  }
  const clickEvent = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e:React.MouseEvent) => {
        handleMouse(e, true)
    },
    onMouseLeave: (e:React.MouseEvent) => {
        handleMouse(e, false)
    }
  } : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('viking-submenu', {
        'menu-opened': menuOpen
    })
    const childrenCompopent = React.Children.map(children, (child, i) => {
        const childElement = child as FunctionComponentElement<MenuItemProps>
        if(childElement.type.displayName === 'MenuItem') {
            return React.cloneElement(childElement, {
                index: `${index}-${i}`
            })
        }
        else
        {
            console.error("Warning: SubMenu has a child which is not a MenuItem conponents")
        }
    })
    return (
        <ul className= { subMenuClasses } >
            { childrenCompopent }
        </ul>
    )
  }

  return (
    <li key = { index } className = { classes } { ...hoverEvents}>
        <div className = 'submenu-title' { ...clickEvent}>
            { title }
        </div>
        { renderChildren() }
    </li>
  )
}

SubMenu.displayName = 'subMenu'
export default SubMenu