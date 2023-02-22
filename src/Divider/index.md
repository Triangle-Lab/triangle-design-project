---
group:
  title: 布局
toc: content
---

# Divider

用于分割内容的分割线。  

## 使用示例

### 默认

```jsx
import React from 'react'
import { Divider, DividerStyle } from 'triangle-ui-react'

export default function App() {
  return (
    <div>
      <Divider />
    </div>
  );
};
```

### 颜色

我们提供了 6 种颜色的分割线，分别是：`primary`、`secondary`、`success`、`default`、`danger`、`warning`。  

```jsx
import React from 'react'
import { Divider, DividerStyle } from 'triangle-ui-react'

export default function App() {
  return (
    <div>
    <Divider style={DividerStyle.Primary} />
    <br/>
    <Divider style={DividerStyle.Secondary} />
    <br/>
    <Divider style={DividerStyle.Success} />
    <br/>
    <Divider style={DividerStyle.Default} />
    <br/>
    <Divider style={DividerStyle.Danger} />
    <br/>
    <Divider style={DividerStyle.Warning} />
    </div>
  );
};
```

### 文字

我们允许在分割线中间添加文字。  

```jsx
import React from 'react'
import { Divider, DividerStyle } from 'triangle-ui-react'

export default function App() {
  return (
    <div>
      <Divider style={DividerStyle.Primary} text="Primary" />
      <br/>
      <Divider style={DividerStyle.Secondary} text="Secondary" />
      <br/>
      <Divider style={DividerStyle.Success} text="Success" />
      <br/>
      <Divider style={DividerStyle.Default} text="Default" />
      <br/>
      <Divider style={DividerStyle.Danger} text="Danger" />
      <br/>
      <Divider style={DividerStyle.Warning} text="Warning" />
    </div>
  );
};
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :---: | :---: | :---: | :---: | :---: |
| style | 分割线的颜色 | `DividerStyle` | `DividerStyle.Default` `DividerStyle.Primary` `DividerStyle.Secondary` `DividerStyle.Success` `DividerStyle.Danger` `DividerStyle.Warning` | `DividerStyle.Default` |
| text | 分割线中间的文字 | `string` | - | - |
| className | 自定义类名 | `string` | - | - |
| style | 自定义样式 | `React.CSSProperties` | - | - |
