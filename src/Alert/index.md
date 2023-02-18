---
toc: content
---

# Alert

提示，展现需要关注的信息。

## 使用示例

### 默认

```jsx
import React from 'react'
import { Alert, AlertType } from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <Alert title="默认提示" description="这是一条默认提示"  />
  )
}
```

### 多种色彩

可以使用 `alertType` 属性来设置不同的色彩。

```jsx
import React from 'react'
import { Alert, AlertType } from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <div>
        <Alert style={{marginBottom:"1rem"}} title="成功提示" description="这是一条成功提示" alertType={AlertType.Success} />
        <Alert style={{marginBottom:"1rem"}} title="警告提示" description="这是一条警告提示" alertType={AlertType.Warning} />
        <Alert style={{marginBottom:"1rem"}} title="危险提示" description="这是一条危险提示" alertType={AlertType.Danger} />
    </div>
  )
}
```

### 带有关闭按钮

可以通过 `onClose` 属性来监听关闭事件。可以使用 `closeable` 属性来设置是否显示关闭按钮。

```jsx
import React from 'react'
import { Alert, AlertType } from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <Alert title="默认提示" description="这是一条默认提示" closeable onClose={() => {alert("关闭")}} />
  )
}
```

### 不同位置

可以通过 `position` 属性来设置不同的位置。

```jsx
import React, {useState} from 'react'
import { Alert, AlertType, Button, ButtonType, ButtonSize } from 'triangle-ui'


export default function AlertShow (): JSX.Element {
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(false)

  return (
        <div>
            <Button 
                style={{marginRight:"1rem",marginBottom:".3rem"}} 
                btnType={ButtonType.Primary} 
                onClick={() => {
                      setLeft(!left)
                }}>
                  {left ? 'Close Left Alert' : 'Open Left Alert'}
            </Button>
            <Button 
                style={{marginRight:"1rem",marginBottom:".3rem"}} 
                btnType={ButtonType.Primary} 
                onClick={() => {
                      setRight(!right)
                }}>
                  {right ? 'Close Right Alert' : 'Open Right Alert'}
            </Button>
            {left && <Alert title="Left Alert" description="This is a left alert" alertType={AlertType.Success} position="left" />}
            {right && <Alert title="Right Alert" description="This is a right alert" alertType={AlertType.Success} position="right" />}
        </div>
  )
}
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| className | 自定义类名 | string | - |
| alertType | 提示类型 | `AlertType.Default`  `AlertType.Success`  `AlertType.Warning`  `AlertType.Danger` | `AlertType.Default` |
| title | 标题 | string | - |
| description | 描述 | string | - |
| closeable | 是否可关闭 | boolean | `false` |
| position | 位置 | 'left' \| 'right' | - |
| onClose | 关闭时触发的回调函数 | `React.MouseEventHandler<HTMLButtonElement>` | - |
