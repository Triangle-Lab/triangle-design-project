---
toc: content
---

# Avatar

用作头像显示，可以为图片或字符形式展示。

## 使用示例

### 图片形式

通过设置 `src` 属性来设置图片。

```jsx
import React from 'react'
import { Avatar } from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <div>
      <Avatar src="https://avatars.githubusercontent.com/u/122715946?s=200&v=4"/>
      <Avatar style={{marginLeft:"1rem"}} src="https://avatars.githubusercontent.com/u/83146544?v=4"/>
    </div>
  )
}
```

### 文字

通过设置 `text` 属性来设置文字，会根据文字长度自动调整字符显示数量。

```jsx
import React from 'react'
import { Avatar } from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <div>
      <Avatar text="Triangle"/>
      <Avatar style={{marginLeft:"1rem"}} text="TriangleUI"/>
    </div>
  )
}
```

### 多种颜色

通过设置 `avatarType` 属性来设置颜色。可选值为 `primary`、`success`、`secondary`、`danger`、`warning` 。

```jsx
import React from 'react'
import { Avatar, AvatarType } from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <div>
      <Avatar text="A" avatarType={AvatarType.Primary}/>
      <Avatar style={{marginLeft:"1rem"}}  text="B" avatarType={AvatarType.Success}/>
      <Avatar style={{marginLeft:"1rem"}}  text="C" avatarType={AvatarType.Secondary}/>
      <Avatar style={{marginLeft:"1rem"}}  text="D" avatarType={AvatarType.Danger}/>
      <Avatar style={{marginLeft:"1rem"}}  text="E" avatarType={AvatarType.Warning}/>
    </div>
  )
}
```

### 大小

通过设置 `size` 属性来设置大小。可选值为 `small`、`large` 。默认不填时，为适中大小。

```jsx
import React from 'react'
import { Avatar, AvatarType, AvatarSize } from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <div>
      <Avatar style={{marginLeft:"1rem"}} text="A" size={AvatarSize.Small}/>
      <Avatar style={{marginLeft:"1rem"}} text="B"/>
      <Avatar style={{marginLeft:"1rem"}} text="C" size={AvatarSize.Large}/>
    </div>
  )
}
```

### 形状

通过设置 `circle` 属性来设置头像为圆形。默认不填时，为方形。  

```jsx
import React from 'react'
import { Avatar, AvatarType, AvatarSize } from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <div>
      <Avatar text="A" circle/>
    </div>
  )
}
```

形状可与上述属性叠加使用。

```jsx
import React from 'react'
import { Avatar, AvatarType, AvatarSize } from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <div>
      <Avatar text="A" circle avatarType={AvatarType.Primary} size={AvatarSize.Large}/>
    </div>
  )
}
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| className | 自定义类名 | string | - |
| avatarType | 颜色 | `AvatarType.Default` `AvatarType.Primary` `AvatarType.Secondary` `AvatarType.Success` `AvatarType.Danger` `AvatarType.Warning` | `AvatarType.Default` |
| size | 大小 | `AvatarSize.Small` `AvatarSize.Large` | - |
| src | 图片地址 | string | - |
| alt | 图片描述 | string | - |
| circle | 是否为圆形 | boolean | false |
| text | 文字 | string | - |
