---
toc: content
---

```tsx
import React from 'react';
import { Button, ButtonType } from 'triangle-ui';
import { Space, Direction, Side, SpaceingSize } from 'triangle-ui';

export default function App() {
  return (
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
  );
}
```
