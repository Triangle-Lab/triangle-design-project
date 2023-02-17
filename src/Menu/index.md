---
toc: content
---

# Menu

菜单实现了结构分块，允许用户进行选择跳转

## 使用示例

### 默认

```jsx
import React from 'react'
import { Menu, MenuItem,  MenuContext, subMenu } from 'triangle-ui'
import { Button, ButtonType, ButtonSize } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Menu>
        <MenuItem>
          菜单1
        </MenuItem>
        <MenuItem>
          菜单2
        </MenuItem>
        <MenuItem>
          菜单3
        </MenuItem>
      </Menu>
    </div>
  );
};
```

### 竖式菜单

```jsx
import React from 'react'
import { Menu, MenuItem,  MenuContext, subMenu } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Menu
        mode = "vertical"
      >
        <MenuItem>
          菜单1
        </MenuItem>
        <MenuItem>
          菜单2
        </MenuItem>
        <MenuItem>
          菜单3
        </MenuItem>
      </Menu>
    </div>
  );
};
```

### 禁用菜单

```jsx
import React from 'react'
import { Menu, MenuItem,  MenuContext, subMenu } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Menu>
        <MenuItem disabled >
          菜单1
        </MenuItem >
        <MenuItem disabled>
          菜单2
        </MenuItem>
        <MenuItem disabled>
          菜单3
        </MenuItem>
      </Menu>
    </div>
  );
};
```

### 下拉菜单

横向菜单鼠标悬停出现下拉菜单，纵向菜单点击出现下拉菜单
```jsx
import React from 'react'
import { Menu, MenuItem,  MenuContext, SubMenu } from 'triangle-ui'

export default function App() {
  return (
    <div>
      <Menu
        mode = "horizontal"
      >
        <MenuItem>
          菜单1
        </MenuItem>
        <SubMenu title = "下拉菜单">
          <MenuItem>
            下拉菜单1
          </MenuItem>
          <MenuItem>
            下拉菜单2
          </MenuItem>
          <MenuItem>
            下拉菜单3
          </MenuItem>
        </SubMenu>
        <MenuItem>
          菜单2
        </MenuItem>
      </Menu>

      <Menu
        mode = "vertical"
      >
        <MenuItem>
          菜单1
        </MenuItem>
        <SubMenu title = "下拉菜单">
          <MenuItem>
            下拉菜单1
          </MenuItem>
          <MenuItem>
            下拉菜单2
          </MenuItem>
          <MenuItem>
            下拉菜单3
          </MenuItem>
        </SubMenu>
        <MenuItem>
          菜单2
        </MenuItem>
      </Menu>
    </div>
  );
};
```

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| mode | 菜单形式 | `vertical` <br/> `horizontal` | `horizontal` |
| index | 菜单编号 | `string` | `0` |
| title | 下拉菜单文字内容 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| children | 按钮内容 | `ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| onSelect | 选择事件 | `SelectCallback` | - |


以及所有原生的 `Menu` 元素的属性,使用`style`支持自定义`Menu`的颜色尺寸信息。