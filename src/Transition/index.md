---
group:
  title: 动画
toc: content
---

# Transition

用于在元素进入或者离开 DOM 时添加动画效果。

## 使用示例

### 基本用法

下面的代码演示了 Transition 的基本用法。`Transition` 组件通过 `in` 属性来控制子组件的显示和隐藏。

```tsx
import React, { useState } from 'react'
import { Transition } from 'triangle-ui-react'
import { Button } from 'triangle-ui-react'

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

### 不同类型的动画

我们提供了 `zoom-in-top` `zoom-in-left` `zoom-in-right` 三种动画效果。

```tsx
import React, { useState } from 'react'
import { Transition } from 'triangle-ui-react'
import { Button } from 'triangle-ui-react'

export default function App() {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  return (
    <div style={{display:"block"}}>
      <div style={{marginBottom:"5px"}}>
        <Button btnType="primary" size="sm" onClick={() => {setShow1(!show1)}}>zoom-in-top</Button>
        <Transition
          in={show1}
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
      <div style={{marginBottom:"5px"}}>
        <Button btnType="primary" size="sm" onClick={() => {setShow2(!show2)}}>zoom-in-left</Button>
        <Transition
          in={show2}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </Transition>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Button btnType="primary" size="sm" onClick={() => {setShow3(!show3)}}>zoom-in-right</Button>
        <Transition
          in={show3}
          timeout={300}
          animation="zoom-in-right"
        >
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </Transition>
      </div>
    </div>
  )
}
```

### 持续时间

通过 `timeout` 属性来设置动画持续时间。

```tsx
import React, { useState } from 'react'
import { Transition } from 'triangle-ui-react'
import { Button } from 'triangle-ui-react'

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Button btnType="primary" size="sm" onClick={() => {setShow(!show)}}>Toggle</Button>
      <Transition
        in={show}
        timeout={1000}
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

### `div` 以外的元素

`Transition` 组件的子组件必须是一个 `div` 元素，如果不是，请使用 `div` 包裹。否则会报错。

```tsx
import React, { useState } from 'react'
import { Transition } from 'triangle-ui-react'
import { Button } from 'triangle-ui-react'

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
        <div>2</div>
      </Transition>
    </div>
  )
}
```

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| in | 是否显示子组件 | `boolean` | `false` |
| timeout | 动画持续时间 | `number` | `300` |
| animation | 动画名称 | `zoom-in-top` `zoom-in-left` `zoom-in-right` | - |
| children | 子组件 | `ReactElement` | - |
