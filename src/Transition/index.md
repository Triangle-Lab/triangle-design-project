---
toc: content
---

# Transition

过渡提供多种类型的过度动画使组件动画更为流畅

```jsx
import { Transition } from 'triangle-ui';

export default () => {
    <dev>
      <Transition
        timeout = { 300 }
        animation = 'zoom-in-top'
      >
        <ul>
            111
        </ul>
      </Transition>
    </dev>
}
```

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| animation | 过渡方向 | `ButtonType.Primary` <br/> `ButtonType.Danger`  `ButtonType.Secondary` <br/> `ButtonType.Success`  `ButtonType.Link`  `ButtonType.Outline` | `ButtonType.Default` |
| wrapper | 按钮大小 | `ButtonSize.Large` <br/> `ButtonSize.Small` | `ButtonSize.Default` |
| timeout | 过度时间 | `ButtonSize.Large` <br/> `ButtonSize.Small` | `ButtonSize.Default` |

以及所有原生的 `Transition` 元素的属性。

