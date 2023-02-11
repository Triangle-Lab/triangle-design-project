---
toc: content
---
# Dropdown

用于显示下拉菜单的组件。

## 使用示例

`Dropdown` 接受一个 `droplist` 属性，该属性接受一个数组，数组中的每一项都是一个 `ReactNode`，即可以是一个 `ReactElement`，也可以是一个 `ReactFragment`。

```jsx
import React from 'react'
import { Dropdown, Button, ButtonType } from 'triangle-ui'

export default function App() {
  return (
    <div>
        <Dropdown droplist={[<div key="1">option1</div>, <div key="2">option2</div>, <div key="3">option3</div>]}>
            <Button btnType={ButtonType.Primary}>开始</Button>
        </Dropdown>
    </div>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| droplist | 下拉菜单的内容 | `JSX.Element[]` | - |
| children | 触发下拉菜单的元素 | `JSX.Element` | - |
