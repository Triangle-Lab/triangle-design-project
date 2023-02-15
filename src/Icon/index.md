---
toc: content
---

# Icon

图标能够更加生动形象的丰富组件的内容

## 使用示例

### 默认

```jsx
import React from 'react'
import { Icon } from 'triangle-ui'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export default function App() {
  return (
    <Icon icon="arrow-down" theme="warning" size="100x"/>
  );
};
```

### 多种图标

### 大小

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| theme | 主题 | `primart` <br/> `secondary`  `success` <br/> `info`  `warning`  `danger` <br/> `light`  `dark`| - |
| size | 图标大小 | 单位为x <br/> | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| onClick | 点击事件 | `React.MouseEventHandler` | - |

以及所有原生的 `icon` 元素的属性。