---
toc: content
---

# Transition

过渡提供多种类型的过度动画使组件动画更为流畅

## 使用示例

### 不同方式的过渡动画

从顶部过渡

```jsx
import React, { useState } from 'react'
import classNames from 'classnames'
import { Button, ButtonType, ButtonSize } from 'triangle-ui'
import { Transition } from 'triangle-ui'

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Primary} size={ButtonSize.Large} onClick = {() => setShow(!show)}>
        zoom-in-top
      </Button>
      <Transition
        in = { show }
        timeout = { 300 }
        animation = "zoom-in-top"
      >
        <div>
          <p>
            111
          </p>
          <p>
            222
          </p>
          <p>
            333
          </p>
          <p>
            444
          </p>
        </div>
      </Transition>
    </div>
  );
};
```

从左侧过渡

```jsx
import React, { useState } from 'react'
import classNames from 'classnames'
import { Button, ButtonType, ButtonSize } from 'triangle-ui'
import { Transition } from 'triangle-ui'

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Primary} size={ButtonSize.Large} onClick = {() => setShow(!show)}>
        zoom-in-left
      </Button>
      <Transition
        in = { show }
        timeout = { 300 }
        animation = "zoom-in-left"
      >
        <div>
          <p>
            111
          </p>
          <p>
            222
          </p>
          <p>
            333
          </p>
          <p>
            444
          </p>
        </div>
      </Transition>
    </div>
  );
};
```

从底部过渡

```jsx
import React, { useState } from 'react'
import classNames from 'classnames'
import { Button, ButtonType, ButtonSize } from 'triangle-ui'
import { Transition } from 'triangle-ui'

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Primary} size={ButtonSize.Large} onClick = {() => setShow(!show)}>
        zoom-in-bottom
      </Button>
      <Transition
        in = { show }
        timeout = { 300 }
        animation = "zoom-in-bottom"
      >
        <div>
          <p>
            111
          </p>
          <p>
            222
          </p>
          <p>
            333
          </p>
          <p>
            444
          </p>
        </div>
      </Transition>
    </div>
  );
};
```

从右侧过渡

```jsx
import React, { useState } from 'react'
import classNames from 'classnames'
import { Button, ButtonType, ButtonSize } from 'triangle-ui'
import { Transition } from 'triangle-ui'

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Primary} size={ButtonSize.Large} onClick = {() => setShow(!show)}>
        zoom-in-right
      </Button>
      <Transition
        in = { show }
        timeout = { 300 }
        animation = "zoom-in-right"
      >
        <div>
          <p>
            111
          </p>
          <p>
            222
          </p>
          <p>
            333
          </p>
          <p>
            444
          </p>
        </div>
      </Transition>
    </div>
  );
};
```

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| animation | 过渡方向 | `zoom-in-top` <br/> `zoom-in-left` <br/> `zoom-in-bottom` <br/> `zoom-in-right` | - |
| wrapper | 是否无视包含的内容只显示默认内容 | `boolean` | `false` |
| timeout | 延迟时间 | `number` | - |
| in | 过渡中包含的事件 | `React.Dispatch<React.SetStateAction>` | - |

以及所有原生的 `transition` 元素的属性。

