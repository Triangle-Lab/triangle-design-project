/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import MenuItem, { type MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (SelectedIndex: string) => void
export interface MenuProps {
  defaultIndex?: string
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  children?: React.ReactNode
  onSelect?: (SelectedIndex: string) => void
  defaultOpenSubmenus?: string[]
}

interface IMenuContext {
  index: string
  onSelect?: SelectCallback
  mode?: MenuMode
  defaultOpenSubmenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })
const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubmenus } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('triangle-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: string): void => {
    setActive(index)
    if (onSelect != null) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    index: currentActive || '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubmenus
  }

  const renderChildren = (): any => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem conponents')
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu" >
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubmenus: []
}

MenuItem.displayName = 'MenuItem'
export default Menu
