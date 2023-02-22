---
group:
  title: 通用
toc: content
---

# Switch

用于开关状态的切换。  

## 使用示例

### 默认

通过 `onSwitch` 事件来获取开关的状态。它返回一个 `boolean` 类型的值，表示开关的状态。需要注意的是，我们需要手动指定 `switchId` 以区别不同的开关。它接收一个字符串作为参数。在单个页面中，`switchId` 的值需要保持唯一。否则，会出现点击一个开关却改变了另一个开关的状态的情况。

```jsx
import React, { useState } from 'react'
import { Switch } from 'triangle-ui-react'

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      开关的状态：{checked ? '开' : '关'}
      <br/>
      <Switch
        onSwitch={(isOn) => {
          setChecked(isOn);
        }}
        switchId="switch1"
      />
    </div>
  );
}
```

### 打开时的颜色

通过 `onColor` 属性来设置开关打开时的颜色。

```jsx
import React, { useState } from 'react'
import { Switch } from 'triangle-ui-react'

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      开关的状态：{checked ? '开' : '关'}
      <br/>
      <Switch
        onColor="#ff0000"
        onSwitch={(isOn) => {
          setChecked(isOn);
        }}
        switchId="switch2"
      />
    </div>
  );
}
```

## API

| 参数 | 说明 | 类型 | 示例 |
| --- | --- | --- | --- |
| onSwitch | 开关状态改变时触发的事件 | `(isOn: boolean) => void` | `onSwitch={(isOn) => { console.log(isOn) }}` |
| switchId | 开关的唯一标识符 | string | `switchId="switch1"` |
