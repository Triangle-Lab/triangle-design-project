// import { type } from 'os'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName
  wrapper?: boolean
}// 4.2.4版本CSSTransitionProps成为了联合类型需要这样实现

const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    ...restProps
  } = props
  return (
    <CSSTransition
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    classNames = { classNames ?? animation}
    { ...restProps }
    >
    {(wrapper ?? false) ? <div>children</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}

export default Transition
