---
toc: content
---

# Input

输入框能为用户提供输入交互

## 使用示例

### 默认

一个简单的输入框，支持 `HTMLInput` 的所有基本属性。

```jsx
import React, {useState} from 'react'
import { Input } from 'triangle-ui'

export default function App() {
  const [value,setValue] = useState('')
  return (
    <div>
      <Input  
        placeholder ="请输入" 
        size = 'sm' 
        onChange={(e) => {setValue(e.target.value)}}  
        />
    </div>
  );
};
```

### 禁用

可以设置 `disabled` 属性禁用输入框。

```jsx
import React from 'react'
import { Input } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Input placeholder ="不能改动哦" disabled={true}/>
    </div>
  );
};
```

### 大小

可以设置 `size` 属性改变输入框的大小。

```jsx
import React from 'react'
import { Input } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Input 
        style={{marginLeft:"1rem",marginTop:"1rem"}} 
        size = 'lg'
        placeholder ="我是大号的"
      />
      <Input 
        style={{marginLeft:"1rem",marginTop:"1rem"}} 
        size = 'sm'
        placeholder ="我是小号的"
      />
    </div>
  );
};
```

### 添加前后缀

需要的时候可以添加前后缀，比如网址的前缀和后缀。

```jsx
import React from 'react'
import { Input } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Input
        style={{marginLeft:"1rem",marginTop:".1rem"}} 
        prepand = 'http://'
        placeholder ="请输入网址"
        append = '.com'
        size = 'lg'
      />
    </div>
  );
};
```

### 添加图标

支持https://fontawesome.com
所提供的所有icon图标

```jsx
import React, {useState} from 'react'
import { Input } from 'triangle-ui'

export default function App() {
  const [value,setValue] = useState('')
  return (
    <div>
      <Input 
        icon='arrow-right' 
        placeholder ="请输入" 
        size = 'sm' 
        onChange={(e) => {setValue(e.target.value)}}  
        />
    </div>
  );
};
```

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| disable | 是否禁用input | `boolean` | `flase` |
| placeholder| 默认值 | `string` | - |
| size | 输入框大小 | `lg` `sm` | `sm` |
| icon | 添加图标，在右侧悬浮添加一个图标，用于提示 | `IconProp` | - |
| prepand | 添加前缀，用于配置一些固定组合 | `string` | - |
| append | 添加后缀，用于配置一些固定组合 | `ReactNode` | - |

以及所有原生的 `input` 元素的属性。type等属性值。