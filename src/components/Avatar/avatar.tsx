import React from 'react'
import classNames from 'classnames'

// avatar
export enum AvatarSize {
  Large = 'lg',
  Small = 'sm'
}

export enum AvatarType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning',
}

interface BaseAvatarProps {
  className?: string
  avatarType?: AvatarType
  size?: AvatarSize
  src?: string
  alt?: string
  circle?: boolean
  text?: string
}

type NativeAvatarProps = BaseAvatarProps & React.HTMLAttributes<HTMLElement>
export type AvatarProps = Partial<NativeAvatarProps>

const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, avatarType, size, src, alt, circle, text, ...restProps } = props
  const classes = classNames('avatar', className, {
    [`avatar-${size}`]: size,
    [`avatar-${avatarType}`]: avatarType,
    'avatar-circle': circle
  })
  return (
        <div className={classes} {...restProps}>
          {(src != null) ? <img src={src} alt={alt} /> : <p className='avatar-text'>{text}</p>}
        </div>
  )
}

Avatar.defaultProps = {
  avatarType: AvatarType.Default,
  circle: false
}

export default Avatar
