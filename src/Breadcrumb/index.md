---
group:
  title: 导航
toc: content
---

# Breadcrumb

面包屑用于识别页面在层次结构内的位置，并根据需要向上返回。

## 使用示例

### 基本使用

通过创建一个对象数组来使用面包屑组件。  

```jsx
import React from 'react'
import { Breadcrumb, BreadcrumbObjectsType } from 'triangle-ui-react'

const objectsExample: BreadcrumbObjectsType[] = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '文档',
    link: '/guide',
  },
  {
    text: '面包屑',
    link: '/components/breadcrumb',
  },
];


export default function App() {
  return (
      <Breadcrumb objects={objectsExample} />
  );
};
```

### 跳转方式

通过设置 `target` 属性来设置跳转方式。有两个可选值： `_blank` 和 `_self` 。  

```jsx
import React from 'react'
import { Breadcrumb, BreadcrumbObjectsType } from 'triangle-ui-react'

export default function App() {
  return (
      <Breadcrumb
      target={'_blank'}
      objects={[
        {
          text: '首页',
          link: '/',
        },
        {
          text: '文档',
          link: '/guide',
        },
        {
          text: '面包屑',
          link: '/components/breadcrumb',
        },
      ]} />
  );
};
```

## API

### Breadcrumb

| 参数 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| objects | 面包屑对象数组 | `BreadcrumbObjectsType[]` | - |
| target | 跳转方式 | `_blank` \| `_self` | `_self` |

### BreadcrumbObjectsType

| 参数 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| text | 面包屑文本 | `string` | - |
| link | 面包屑链接 | `string` | - |
