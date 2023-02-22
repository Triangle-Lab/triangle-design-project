# Transition

<!-- // import { type } from 'os'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName,
  wrapper? : boolean,
}

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
      classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>children</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition -->

## 使用示例

### 基本用法

下面的代码演示了 Transition 的基本用法。

```tsx
import React, { useState } from 'react'
import { Transition } from 'triangle-ui'
import { Button } from 'triangle-ui'

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Button btnType="primary" size="sm" onClick={() => {setShow(!show)}}>Toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-top"
      >
        <div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </Transition>
    </div>
  )
}
```
