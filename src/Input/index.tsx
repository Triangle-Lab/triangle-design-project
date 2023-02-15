/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { type ChangeEvent, type FC, type InputHTMLAttributes, type ReactElement } from 'react'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
// import Icon from '../Icon'

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  // 是否禁用input
  disabled?: boolean
  // 设置input大小，支持lg或者sm
  size?: InputSize
  // 添加图标，在右侧悬浮添加一个图标，用于提示
  icon?: IconProp
  // 添加前缀，用于配置一些固定组合
  prepand?: string | ReactElement
  // 添加后缀，用于配置一些固定组合
  append?: string | ReactElement
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props) => {
  // 取出所有的属性
  const {
    disabled,
    size,
    icon,
    prepand,
    append,
    style,
    ...restProps
  } = props
  // 根据属性计算不同的className
  const cnames = classNames('viking-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    'input-group': prepand ?? append,
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    'input-group-append': !!append,
    'input-group-prepand': !!prepand
  })
  const fixControlledValue = (value: any): any => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return (
    // 判断是否要添加特定的节点
    <div className = { cnames } style = { style }>
      {prepand && <div className="viking-input-group-prepend">{prepand}</div>}
      {icon &&
        <div className= "icon-wrapper">
          {/* <Icon icon = { icon } title = {'title'}/> */}
        </div>}
      <input
        className = "viking-input-inner"
        disabled = { disabled }
        { ...restProps }
      />
      {append && <div className = "viking-input-group-append">{ append }</div>}
    </div>
  )
}

export default Input
