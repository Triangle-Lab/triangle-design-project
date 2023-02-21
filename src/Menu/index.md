---
toc: content
---

# Menu

菜单实现了结构分块，允许用户进行选择跳转

## 使用示例

### 水平菜单

水平菜单，可点击选择菜单项，支持默认选中项

```jsx
import React, { useState } from 'react';
import {Menu, MenuItem} from 'triangle-ui';

export default function App() {
  const [selected, setSelected] = useState('1');

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div>
      <Menu mode="horizontal" onSelect={handleSelect} defaultIndex="1">
        <MenuItem index="1">Home</MenuItem>
        <MenuItem index="2">About</MenuItem>
        <MenuItem index="3">Contact</MenuItem>
      </Menu>
      <p>You have selected item {selected}</p>
    </div>
  );
}
```

### 二级菜单

二级菜单，可点击选择菜单项，支持默认选中项

```jsx
import React, { useState } from 'react';
import { Menu, MenuItem } from 'triangle-ui';
import { SubMenu } from 'triangle-ui';

export default function App() {
  const [selected, setSelected] = useState('1');

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div>
      <Menu mode="horizontal" onSelect={handleSelect} defaultIndex="1">
        <MenuItem index="1">Home</MenuItem>
        <SubMenu title="About" index="2">
          <MenuItem index="2-1">Our Team</MenuItem>
          <MenuItem index="2-2">Our Story</MenuItem>
        </SubMenu>
        <MenuItem index="3">Contact</MenuItem>
      </Menu>
      <p>You have selected item {selected}</p>
    </div>
  );
}
```

### 垂直菜单

垂直菜单，可点击选择菜单项，并展开子菜单

```jsx
import React, { useState } from 'react';
import { Menu, MenuItem } from 'triangle-ui';
import { SubMenu } from 'triangle-ui';

export default function App() {
  const [selected, setSelected] = useState('1');
  const [openSubmenus, setOpenSubmenus] = useState(['2']);

  const handleSelect = (index) => {
    setSelected(index);
  };

  const handleOpenSubmenu = (index) => {
    setOpenSubmenus((prev) => {
      const isSubmenuOpen = prev.includes(index);
      return isSubmenuOpen ? prev.filter((i) => i !== index) : [...prev, index];
    });
  };

  return (
    <div style={{width: "300px"}}>
      <Menu mode="vertical" defaultIndex="0" defaultOpenSubmenus={['2']}>
        <MenuItem index="0">首页</MenuItem>
        <MenuItem index="1">学习</MenuItem>
        <SubMenu index="2" title="资源">
          <MenuItem index="2-1">React</MenuItem>
          <MenuItem index="2-2">Vue</MenuItem>
        </SubMenu>
        <MenuItem index="3">关于我们</MenuItem>
      </Menu>
    </div>
  );
}
```

### 禁用菜单项

禁用菜单项，不可点击选择

```jsx
import React, { useState } from 'react';
import { Menu, MenuItem } from 'triangle-ui';
import { SubMenu } from 'triangle-ui';

export default function App() {
  return (
    <div>
      <h2>Example 3: Vertical Menu with Non-Clickable Items</h2>
      <Menu mode="vertical"  defaultIndex="1">
        <MenuItem index="1" disabled>
          主页（正在建设中）
        </MenuItem>
        <MenuItem index="2">
          关于
        </MenuItem>
        <MenuItem index="3">
          与我们联系
        </MenuItem>
      </Menu>
    </div>
  );
}
```

