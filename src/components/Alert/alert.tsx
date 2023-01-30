import React from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning',
}

interface BaseAlertProps {
  className?: string
  alertType?: AlertType
  title?: string
  description?: string
  closeable?: boolean
  position?: 'left' | 'right'
  onClose?: React.MouseEventHandler<HTMLButtonElement>
}

type NativeAlertProps = BaseAlertProps & React.HTMLAttributes<HTMLElement>
export type AlertProps = Partial<NativeAlertProps>

const Alert: React.FC<AlertProps> = (props) => {
  const { className, alertType, title, description, closeable, onClose, position, ...restProps } = props
  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType,
    [`alert-${position}`]: position
  })
  return (
    <div className={classes} {...restProps}>
          <div className="alert-title">{title}</div>
          <div className='alert-in'>
              {(description != null) && <div className="alert-description">{description}</div>}
              {(closeable ?? false) && (<button className="alert-close" onClick={onClose}>x</button>)}
          </div>
    </div>
  )
}

Alert.defaultProps = {
  alertType: AlertType.Default,
  closeable: false
}

export default Alert
