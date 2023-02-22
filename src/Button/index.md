---
group:
  title: 通用
toc: content
---

# Button

按钮允许用户执行操作并通过单击进行选择。

## 使用示例

### 默认

```jsx
import React from 'react'
import { Button, ButtonType, ButtonSize } from 'triangle-ui-react'

export default function App() {
  return (
    <div>
     <Button>Default</Button>
    </div>
  );
};
```

### 多种颜色

您可以使用颜色属性更改按钮的颜色。  

```jsx
import React from 'react'
import { Button, ButtonType, ButtonSize } from 'triangle-ui-react'

export default function App() {
  return (
    <div>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button style={{marginLeft:"1rem"}} btnType={ButtonType.Secondary}>Secondary</Button>
      <Button style={{marginLeft:"1rem"}} btnType={ButtonType.Success}>Success</Button>
      <Button style={{marginLeft:"1rem"}} btnType={ButtonType.Danger}>Danger</Button>
    </div>
  );
};
```

### 描边

描边也是一种按钮的颜色。

```jsx
import React from 'react'
import { Button, ButtonType, ButtonSize } from 'triangle-ui-react'

export default function App() {
  return (
    <div>
       <Button btnType={ButtonType.Outline}>Outline</Button>
    </div>
  );
};
```

### 链接

链接是一种特殊的按钮，它将用户带到另一个页面。  

```jsx
import React from 'react'
import { Button, ButtonType, ButtonSize } from 'triangle-ui-react'

export default function App() {
  return (
    <div>
      <Button btnType={ButtonType.Link} href="http://www.bing.com">Bing Link</Button>
      <Button btnType={ButtonType.Link} target={'_blank'} href="http://www.bing.com">Bing Link Out</Button>
    </div>
  );
};
```

### 禁用

无法使用和无法点击的按钮。以上所有按钮都可以设置为禁用状态。  

```jsx
import React from 'react'
import { Button, ButtonType, ButtonSize } from 'triangle-ui-react'

export default function App() {
  return (
    <div>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} disabled>Disabled</Button>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Primary} disabled>Primary</Button>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Secondary} disabled>Secondary</Button>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Success} disabled>Success</Button>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Danger} disabled>Danger</Button>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Link} href="http://www.bing.com" disabled>Bing Link</Button>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Outline} disabled>Outline</Button>
    </div>
  );
};
```

### 大小

```jsx
import React from 'react'
import { Button, ButtonType, ButtonSize } from 'triangle-ui-react'

export default function App() {
  return (
    <div>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Primary} size={ButtonSize.Large}>Large</Button>
      <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Primary} size={ButtonSize.Small}>Smalll</Button>
    </div>
  );
};
```

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| btnType | 按钮类型 | `ButtonType.Primary` <br/> `ButtonType.Danger`  `ButtonType.Secondary` <br/> `ButtonType.Success`  `ButtonType.Link`  `ButtonType.Outline` | `ButtonType.Default` |
| size | 按钮大小 | `ButtonSize.Large` <br/> `ButtonSize.Small` | `ButtonSize.Default` |
| disabled | 是否禁用 | `boolean` | `false` |
| href | 链接地址 | `string` | - |
| children | 按钮内容 | `ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| onClick | 点击事件 | `React.MouseEventHandler` | - |

以及所有原生的 `button` 元素的属性。当使用 `btnType` 为 `ButtonType.Link` 时，可以使用所有 `a` 元素的属性。如 `target` `rel` 等。
