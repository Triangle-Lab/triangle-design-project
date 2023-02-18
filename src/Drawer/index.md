---
toc: content
---
# Drawer

抽屉是触发命令后，从屏幕一侧滑出的抽屉式的面板。

## 使用示例

### 基本用法

我们留有接口 `isShow` 来控制抽屉的显示与隐藏，在具体使用中，我们可以通过 `useState` 添加状态来控制抽屉的显示与隐藏。需要关闭抽屉时，我们可以通过 `onClose` 事件来控制状态的变化。使用 `position` 来控制抽屉的位置。标题使用 `title` 来控制。  

```jsx
import React from 'react'
import { Drawer, DrawerPosition } from 'triangle-ui'
import  { Button, ButtonType } from 'triangle-ui'

export default function App (): JSX.Element {
  const [left, setLeft] = React.useState(false)
  const [right, setRight] = React.useState(false)
  return (
        <div>
            <Button 
                btnType={ButtonType.Primary} 
                onClick={() => {
                    setLeft(!left)
                  }}>
                  {left ? 'Close Left Drawer' : 'Open Left Drawer'}
            </Button>
            <Button 
                  style={{marginLeft:"1rem"}} 
                  btnType={ButtonType.Primary} 
                  onClick={() => {
                    setRight(!right)
                  }}>
                  {right ? 'Close Right Drawer' : 'Open Right Drawer'}
            </Button>
            <Drawer title="左抽屉" isShow={left} onClose={() => { setLeft(false) }} position={DrawerPosition.Left}>
                <div>抽屉内容</div>
            </Drawer>
            <Drawer title="右抽屉" isShow={right} onClose={() => { setRight(false) }} position={DrawerPosition.Right}>
                <div>抽屉内容</div>
            </Drawer>
        </div>
  )
}
```

### 宽度

我们可以通过 `width` 来控制抽屉的宽度。  

```jsx
import React from 'react'
import { Drawer, DrawerPosition } from 'triangle-ui'
import  { Button, ButtonType } from 'triangle-ui'

export default function App (): JSX.Element {
  const [visible, setVisible] = React.useState(false)
  return (
        <div>
            <Button 
                btnType={ButtonType.Primary} 
                onClick={() => {
                    setVisible(!visible)
                  }}>
                  {visible ? 'Close Drawer' : 'Open Drawer'}
            </Button>
            <Drawer title="抽屉" isShow={visible} width={500} onClose={() => { setVisible(false) }} position={DrawerPosition.Left}>
                <div>抽屉宽度为 500</div>
            </Drawer>
        </div>
  )
}
```

### 遮罩层

我们可以通过 `mask` 来控制遮罩层的显示与隐藏。同时，我们可以通过 `maskClosable` 来控制点击遮罩层是否关闭抽屉。  

```jsx
import React from 'react'
import { Drawer, DrawerPosition } from 'triangle-ui'
import  { Button, ButtonType } from 'triangle-ui'

export default function App (): JSX.Element {
  const [noMask, setNoMask] = React.useState(false)
  const [noMaskClosable, setNoMaskClosable] = React.useState(false)
  return (
        <div>
            <Button btnType={ButtonType.Primary} onClick={() => {
              setNoMask(!noMask)
            }}>{noMask ? 'Close Drawer Without Mask' : 'Open Drawer Without Mask'}</Button>
            <Button style={{ marginLeft: '1rem' }} btnType={ButtonType.Primary} onClick={() => {
              setNoMaskClosable(!noMaskClosable)
            }}>{noMaskClosable ? 'Close Drawer Without MaskClosable' : 'Open Drawer Without MaskClosable'}</Button>

            <Drawer title="抽屉" isShow={noMask} onClose={() => { setNoMask(false) }} position={DrawerPosition.Left} mask={false}>
              <div>没有遮罩</div>
            </Drawer>

            <Drawer title="抽屉" isShow={noMaskClosable} onClose={() => { setNoMaskClosable(false) }} position={DrawerPosition.Left} mask={true} maskClosable={false}>
              <div>点击遮罩不可关闭抽屉</div>
            </Drawer>
        </div>
  )
}
```

### 自定义头部

我们可以通过 `title` 来控制抽屉的标题。同时，我们可以通过 `extra` 来控制抽屉的额外内容。`close` 来控制是否显示关闭按钮。当然，必要时我们可以不显示关闭按钮，用自定义的关闭按钮来关闭抽屉。  

```jsx
import React from 'react'
import { Drawer, DrawerPosition } from 'triangle-ui'
import  { Button, ButtonType } from 'triangle-ui'

export default function Home (): JSX.Element {
  const [visible1, setVisible1] = React.useState(false)
  const [visible2, setVisible2] = React.useState(false)
  return (
    <div>
      <Button btnType={ButtonType.Primary} onClick={() => {
        setVisible1(!visible1)
      }}>{visible1 ? 'Close Drawer Without Close Button' : 'Open Drawer Without Close Button'}</Button>

      <Button style={{marginLeft:"1rem"}} btnType={ButtonType.Primary} onClick={() => {
        setVisible2(!visible2)
      }}>{visible2 ? 'Close Drawer With Extra Head Content' : 'Open Drawer With Extra Head Content'}</Button>

      <Drawer title="抽屉" isShow={visible1} onClose={() => { setVisible1(false) }} position={DrawerPosition.Left} close={false}>
        <div>没有关闭按钮</div>
      </Drawer>

      <Drawer title="抽屉" isShow={visible2} onClose={() => { setVisible2(false) }} position={DrawerPosition.Left} extra={<Button btnType={ButtonType.Primary}>额外内容</Button>}>
        <div>抽屉内容</div>
      </Drawer>
    </div>
  )
}
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :---: | :---: | :---: | :---: | :---: |
| position | 抽屉的位置 | `DrawerPosition` | `DrawerPosition.Left` `DrawerPosition.Right` | `DrawerPosition.Left` |
| width | 抽屉的宽度 | `number` | - | `300` |
| close | 是否显示关闭按钮 | `boolean` | - | `true` |
| title | 抽屉的标题 | `string` | - | - |
| mask | 是否显示遮罩层 | `boolean` | - | `true` |
| maskClosable | 点击遮罩层是否关闭抽屉 | `boolean` | - | `true` |
| extra | 抽屉的额外内容 | `React.ReactNode` | - | - |
| children | 抽屉的内容 | `React.ReactNode` | - | - |
| isShow | 抽屉是否显示 | `boolean` | - | - |
| headerClass | 抽屉头部的类名 | `string` | - | - |
| titleClass | 抽屉标题的类名 | `string` | - | - |
| extraClass | 抽屉额外内容的类名 | `string` | - | - |
| bodyClass | 抽屉内容的类名 | `string` | - | - |
| onClose | 关闭抽屉的回调 | `() => void` | - | - |
