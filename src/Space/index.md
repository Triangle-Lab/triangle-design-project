---
group:
  title: 布局
toc: content
---

# Space

空间组件，用于控制组件之间的间距。

## 使用示例

### 默认

Space组件默认将子元素进行排列，控制其间距。

可以通过设置 `side` 来控制子元素的对齐方式。

```tsx
import React from 'react';
import { Button, ButtonType } from 'triangle-ui-react';
import { Space, Direction, Side, SpaceingSize } from 'triangle-ui-react';
import { Divider, DividerStyle } from 'triangle-ui-react';

export default function App() {
  return (
    <div style={{overflowX: "auto", width:"100%"}}>
      <Space
        size={SpaceingSize.Large}
        direction={Direction.Horizontal}
        side={Side.Left}
        wrap={false}
      >
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Secondary}>Secondary</Button>
        <Button btnType={ButtonType.Success}>Success</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
      </Space>

      <Divider />
      <Space
        size={SpaceingSize.Large}
        direction={Direction.Horizontal}
        side={Side.Right}
        wrap={false}
      >
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Secondary}>Secondary</Button>
        <Button btnType={ButtonType.Success}>Success</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
      </Space>

      <Divider />
      <Space
        size={SpaceingSize.Large}
        direction={Direction.Horizontal}
        side={Side.Center}
        wrap={false}
      >
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Secondary}>Secondary</Button>
        <Button btnType={ButtonType.Success}>Success</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
      </Space>
    </div> 
  );
}
```

### 垂直排列

通过设置 `direction` 为 `Direction.Vertical` 来控制子元素的垂直排列。

可以通过设置 `side` 来控制子元素的对齐方式。

```tsx
import React from 'react';
import { Button, ButtonType } from 'triangle-ui-react';
import { Space, Direction, Side, SpaceingSize } from 'triangle-ui-react';
import { Divider, DividerStyle } from 'triangle-ui-react';

export default function App() {
  return (
    <div style={{overflowX: "auto", width:"100%"}}>
      <Space
        size={SpaceingSize.Small}
        direction={Direction.Vertical}
        side={Side.Left}
        wrap={false}
      >
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Secondary}>Secondary</Button>
      </Space>

      <Divider />
      <Space
        size={SpaceingSize.Small}
        direction={Direction.Vertical}
        side={Side.Center}
        wrap={false}
      >
        <Button btnType={ButtonType.Success}>Success</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
      </Space>

      <Divider />
      <Space
        size={SpaceingSize.Small}
        direction={Direction.Vertical}
        side={Side.Right}
        wrap={false}
      >
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Secondary}>Secondary</Button>
      </Space>
    </div>  
  );
}
```

### 间距

通过设置 `size` 来控制子元素之间的间距。使用 `wrap` 设置是否自动换行。

```tsx
import React from 'react';
import { Button, ButtonType } from 'triangle-ui-react';
import { Space, Direction, Side, SpaceingSize } from 'triangle-ui-react';
import { Divider, DividerStyle } from 'triangle-ui-react';

export default function App() {
  return (
    <div style={{overflowX: "auto", width:"100%"}}>
      <Space
        size={SpaceingSize.Small}
        direction={Direction.Horizontal}
        side={Side.Left}
        wrap={false}
      >
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Secondary}>Secondary</Button>
        <Button btnType={ButtonType.Success}>Success</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
      </Space>

      <Divider />
      <Space
        size={SpaceingSize.Medium}
        direction={Direction.Horizontal}
        side={Side.Left}
        wrap={false}
      >
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Secondary}>Secondary</Button>
        <Button btnType={ButtonType.Success}>Success</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
      </Space>

      <Divider />
      <Space
        size={SpaceingSize.Large}
        direction={Direction.Horizontal}
        side={Side.Left}
        wrap={false}
      >
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Secondary}>Secondary</Button>
        <Button btnType={ButtonType.Success}>Success</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
      </Space>
    </div>  
  );
}
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :---: | :---: | :---: | :---: | :---: |
| SpaceingSize | 子元素分割间距 | `enum` | `Small` `Medium` `large` | `SpaceingSize.Medium` |
| Direction | 子元素排列方向 | `enum` | `Horizontal` `Vertical` | `Direction.Horizontal` |
| Side | 子元素对齐方式 | `enum` | `Left` `Right` `Center` | `Side.Left` |
| wrap | 是否自动换行 | `boolean` | - | `false` |
