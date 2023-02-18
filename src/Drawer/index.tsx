import React from 'react'
import classNames from 'classnames'
import { FiX } from 'react-icons/fi'

// drawer component

export enum DrawerPosition {
  Left = 'left',
  Right = 'right',
}

export interface DrawerDefaultProps {
  position?: DrawerPosition
  width?: number
  close?: boolean
  title?: string
  mask?: boolean
  maskClosable?: boolean
  extra?: React.ReactNode
  children?: React.ReactNode
  isShow: boolean
  headerClass?: string
  titleClass?: string
  extraClass?: string
  bodyClass?: string
  onClose?: () => void
}

// combine default props
type NativeDrawerProps = DrawerDefaultProps & React.HTMLAttributes<HTMLElement>
export type DrawerProps = Partial<NativeDrawerProps>

// Drawer with children
function Drawer (props: DrawerProps): JSX.Element {
  const {
    position,
    width,
    close,
    title,
    mask,
    maskClosable,
    extra,
    children,
    isShow,
    onClose,
    headerClass,
    titleClass,
    extraClass,
    bodyClass,
    ...restProps
  } = props

  const classes = classNames('drawer', {
    [`drawer-${position}`]: position
  })

  const headerClasses = classNames('drawer-header', headerClass)

  const titleClasses = classNames('drawer-title', titleClass)

  const extraClasses = classNames('drawer-extra', extraClass)

  const bodyClasses = classNames('drawer-body', bodyClass)

  const closeFunction = (): any => {
    onClose?.()
  }

  return (
    <>
      {(mask ?? false) && <div className='drawer-mask' id="drawer-mask" style={{ height: '100%', width: '100%', display: (isShow ?? false) ? '' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={(maskClosable ?? false) ? closeFunction : undefined} />}
      <div id="drawer" style={{ width: `${width}px`, display: (isShow ?? false) ? '' : 'none' }} className={classes} {...restProps}>
        <div className='drawer-content'>
          <div className={headerClasses}>
            <div className={titleClasses}>{title}</div>
            <div className={extraClasses}>{extra}</div>
            {
              (close ?? false) && <div className='drawer-close' onClick={closeFunction}><FiX /></div>
            }
          </div>
          <div className={bodyClasses}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

Drawer.defaultProps = {
  position: DrawerPosition.Left,
  width: 300,
  close: true,
  mask: true,
  maskClosable: true,
  isShow: true
}

export default Drawer
