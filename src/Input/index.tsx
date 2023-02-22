/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import React, {
  type ChangeEvent,
  type FC,
  type InputHTMLAttributes,
  type ReactElement,
} from 'react';
import Icon from '../Icon';

type InputSize = 'lg' | 'sm' | 'default';
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  // 是否禁用input
  disabled?: boolean;
  // 设置input大小，支持lg或者sm
  size?: InputSize;
  // 添加图标，在右侧悬浮添加一个图标，用于提示
  icon?: IconProp;
  // 添加前缀，用于配置一些固定组合
  prepend?: string | ReactElement;
  // 添加后缀，用于配置一些固定组合
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
  // 取出所有的属性
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;
  // 根据属性计算不同的className
  const cnames = classNames('input-wrapper', {
    [`input-size-${size}`]: size,
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    'input-group': prepend ?? append,
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    'input-group-pend': !!append || !!prepend,
  });
  const innerClass = classNames('input-inner', {
    'is-alive': !disabled,
    'is-disabled': disabled,
  });
  const fixControlledValue = (value: any): any => {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  };
  if ('value' in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }

  return (
    <div className={cnames} style={style} data-testid="input-wrapper">
      {prepend && <div className="input-group-prepend">{prepend}</div>}
      <input className={innerClass} disabled={disabled} {...restProps} style={{ borderTopLeftRadius: prepend ? 0 : "", borderBottomLeftRadius: prepend ? 0 : "", borderTopRightRadius: append ? 0 : "", borderBottomRightRadius: append ? 0 : "", zIndex: 1 }} />
      {icon && !(prepend || append) ? (
        <div className="icon-wrapper">
          <Icon style={{ cursor: "pointer" }} icon={icon} title={'title'} />
        </div>
      ) : null}
      {append && <div className="input-group-append">{append}</div>}
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
  size: 'default',
};

export default Input;

