---
group:
  title: 图标
toc: content
---

# Icon

图标能够更加生动形象的丰富组件的内容

## 使用示例

### 多种图标

```jsx
import React from 'react'
import { Icon } from 'triangle-ui-react'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function App() {
  return (
    <div>
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-house'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-cloud'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-bar'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-phone'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-star'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-image'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-music'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-cart-shopping'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-bell'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-heart'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-bomb'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-bolt'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'fa-file'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'arrow-up'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'arrow-right'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'arrow-down'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'arrow-left'
      theme = 'dark'
      />
    </div>
  );
};
```

### 改变大小

```jsx
import React from 'react'
import { Icon } from 'triangle-ui-react'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function App() {
  return (
    <div>
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      size = '2x'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      size = '3x'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      size = '4x'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      size = '5x'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      size = '6x'
      /><Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      size = '7x'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      size = '8x'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      size = '9x'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      size = '10x'
      />
    </div>
  );
};
```

### 改变主题

```jsx
import React from 'react'
import { Icon } from 'triangle-ui-react'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function App() {
  return (
    <div>
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'dark'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'primary'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'light'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'danger'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'warning'
      /><Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'info'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'success'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'secondary'
      />
      <Icon
      style = { { marginRight: "1rem" } }
      icon = 'coffee'
      theme = 'primary-light'
      />
    </div>
  );
};
```

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| icon | 图标样式 | `coffee` `arrow-down` `arrow-up`等| - |
| theme | 主题 | `primary` <br/> `secondary`  `success` <br/> `info`  `warning`  `danger` <br/> `light`  `dark` `primary-light`| - |
| size | 图标大小 | 单位为x(倍数) <br/> 上限为10x | 1x |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| onClick | 点击事件 | `React.MouseEventHandler` | - |

以及所有原生的 `icon` 元素的属性。支持 [fontawesome](https://fontawesome.com) 所提供的所有icon图标。
