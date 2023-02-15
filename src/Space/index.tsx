import React from 'react'
import classNames from 'classnames'

export enum SpaceingSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum Direction {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export enum Side {
  Left = 'left',
  Right = 'right',
  Center = 'center'
}

interface BaseSpaceProps {
  size?: SpaceingSize
  wrap?: boolean
  side?: Side
  direction?: Direction
}

type NativeSpaceProps = BaseSpaceProps & React.HTMLAttributes<HTMLElement>
export type SpaceProps = Partial<NativeSpaceProps>

const Space: React.FC<SpaceProps> = (props) => {
  const { size, wrap, side, direction, children, ...restProps } = props
  const classes = classNames('Space', {
    [`Space-${direction}`]: direction,
    'Space-break': direction === Direction.Horizontal && wrap,
    [`Space-vertical-${side}`]: direction === Direction.Vertical && side,
    [`Space-horizontal-${side}`]: direction === Direction.Horizontal && side
  })
  const itemClasses = classNames('Space-item', {
    [`Space-${size}`]: size
  })
  const fitstItemClasses = classNames('Space-item-first', {
    [`Space-first-${size}`]: size && direction === Direction.Horizontal,
    [`Space-${size}`]: size && direction === Direction.Vertical
  })
  return (
    <div className={classes} {...restProps}>
      {React.Children.map(children, (child,index) => (
        //第一个不添加margin
        index === 0 ? (
        <div className={fitstItemClasses}>{child}</div>
        ) : (
        <div className={itemClasses}>{child}</div>
        )
      ))}
    </div>
  )
}

Space.defaultProps = {
  size: SpaceingSize.Medium,
  direction: Direction.Horizontal,
  wrap: true,
  side: Side.Left
}

export default Space
