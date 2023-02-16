---
toc: content
---

# Input

输入框能为用户提供输入交互

## 使用示例

### 默认

```jsx
import React from 'react'
import { Input } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Input/>
    </div>
  );
};
```

### 禁用

```jsx
import React from 'react'
import { Input } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Input disabled/>
    </div>
  );
};
```

### 大小

```jsx
import React from 'react'
import { Input } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Input style={{marginLeft:"1rem",marginTop:".1rem"}} size = 'lg'/>
      <Input style={{marginLeft:"1rem",marginTop:".1rem"}} size = 'sm'/>
    </div>
  );
};
```

### 添加前后缀

```jsx
import React from 'react'
import { Input } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Input
        style={{marginLeft:"1rem",marginTop:".1rem"}} 
        prepand = 'http://'
        append = '.com'
      />
    </div>
  );
};
```

### 添加图标

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| disable | 是否禁用input | `boolean` | `flase` |
| size | 输入框大小 | `lg` `sm` | `sm` |
| icon | 添加图标，在右侧悬浮添加一个图标，用于提示 | `IconProp` | - |
| prepand | 添加前缀，用于配置一些固定组合 | `string` | - |
| append | 添加后缀，用于配置一些固定组合 | `ReactNode` | - |

以及所有原生的 `input` 元素的属性。type等属性值。