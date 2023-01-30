import React from 'react'
import classNames from 'classnames'

// divider component

export enum DividerStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning',
}

export interface DividerDefaultProps {
  style?: DividerStyle
  text?: string
}

// 联合默认值
type NativeDividerProps = DividerDefaultProps & React.HTMLAttributes<HTMLElement>
export type DividerProps = Partial<NativeDividerProps>

const Divider: React.FC<DividerProps> = (props) => {
  const { style, text, ...restProps } = props
  const classes = classNames('divider', {
    [`divider-${style}`]: style
  })
  return (
    <div className={classes} {...restProps}>
        {(text != null) && <span className='divider-text'>{text}</span>}
    </div>
  )
}

Divider.defaultProps = {
  style: DividerStyle.Default
}

export default Divider
