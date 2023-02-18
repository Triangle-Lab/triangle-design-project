---
toc: content
---

# Progress

进度条能够实时反应文件传输情况

## 使用示例

### 默认

```jsx
import React from 'react'
import { Progress } from 'triangle-ui'

export default function App() {
  return (
    <div>
    {
     <Progress
      />
    }
    </div>
  );
};
```

### 进度条百分比

```jsx
import React from 'react'
import { Progress } from 'triangle-ui'

export default function App() {
  return (
    <div>
     <Progress
       percent = {30}
      />
      <Progress
       percent = {50}
      />
      <Progress
       percent = {80}
      />
    </div>
  );
};
```

### 进度条高度

```jsx
import React from 'react'
import { Progress } from 'triangle-ui'

export default function App() {
  return (
    <div>
     <Progress
       percent = {30}
       strokeHeight = {20}
      />
      <Progress
       percent = {30}
       strokeHeight = {40}
      />
      <Progress
       percent = {30}
       strokeHeight = {60}
      />
    </div>
  );
};
```

### 文字显示

```jsx
import React from 'react'
import { Progress } from 'triangle-ui'

export default function App() {
  return (
    <div>
     <Progress
       percent = {30}
       showText = {false}
      />
      <Progress
       percent = {30}
       showText = {true}
      />
    </div>
  );
};
```

### 不同主题

```jsx
import React from 'react'
import { Progress } from 'triangle-ui'

export default function App() {
  return (
    <div>
    <Progress
       percent = {30}
       theme = "primary"
      />
      <Progress
       percent = {30}
       theme = "secondary"
      />
      <Progress
       percent = {30}
       theme = "info"
      />
     <Progress
       percent = {30}
       theme = "success"
      />
      <Progress
       percent = {30}
       theme = "danger"
      />
      <Progress
       percent = {30}
       theme = "dark"
      />
      <Progress
       percent = {30}
       theme = "primary-light"
      />
    </div>
  );
};
```

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| percent | 百分比 | `number` | - |
| strokeHeight | 进度条高度 | `number` | `15` |
| showText | 是否显示文字 | `boolean` | `true` |
| styles | 自定义样式 | `CSSProperties` | - |
| theme | 主题 | `primary` <br/> `secondary`  `success` <br/> `info`  `warning`  `danger` <br/> `light`  `dark` `primary-light`| - |

以及所有原生的 `progress` 元素的属性。