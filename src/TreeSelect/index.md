---
group:
  title: 数据输入
toc: content
---

# TreeSelect

树状选择器，用于选择树状结构的数据。

## 使用示例

### 默认

树状选择器默认为单选，可以通过设置`isSingle`属性为`false`来开启多选。  

当选择器被选中时，该组件将会使用回调函数`onSelect`来返回选中的数据。这个数据包含被**选中的节点**以及**其子节点**的数据。若仅需要父节点，大可将子节点数据忽略。不必担心影响到子节点的选中状态。**每个被选中的节点都会以父节点的形式被存入数组返回**。

同时，若有需要，可以使用`onExpand`回调函数来获取展开的节点数据。这个数据的回传仅会回传被展开节点的value值。

```tsx
import { TreeSelect } from 'triangle-ui-react';

const data = [
  {
    value: 1,
    label: 'Parent 1',
    children: [
      {
        value: 11,
        label: 'Parent 1-0',
        children: [
          {
            value: 111,
            label: 'leaf 1',
          },
          {
            value: 112,
            label: 'leaf 2',
          },
        ],
      },
      {
        value: 12,
        label: 'Parent 1-1',
      },
    ],
  },
  {
    value: 2,
    label: 'Parent 2',
  },
];

export default function App() {
  return (
    <div>
      <TreeSelect
        data={data}
        placeholder="这是一个单选的选择框"
      />
      <div style={{marginTop:"1rem"}}>
        <TreeSelect
          data={data}
          placeholder="这是一个多选的选择框"
          isSingle={false}
        />
      </div>
    </div>
  );
}

export default App;
```

### 勾选框

默认情况下，选择器的勾选框为方形勾选框。可以根据自己的偏好改变勾选框的形状。在某些使用场景下，可能需要禁用选择，这时可以使用`checkable`属性设置为`false`来禁用勾选框。

每个节点前的展开图标也可以选择是否显示。

```jsx
import { TreeSelect } from 'triangle-ui-react';

const data = [
  {
    value: 1,
    label: 'Parent 1',
    children: [
      {
        value: 11,
        label: 'Parent 1-0',
        children: [
          {
            value: 111,
            label: 'leaf 1',
          },
          {
            value: 112,
            label: 'leaf 2',
          },
        ],
      },
      {
        value: 12,
        label: 'Parent 1-1',
      },
    ],
  },
  {
    value: 2,
    label: 'Parent 2',
  },
];

export default function App() {
  return (
    <div>
      <TreeSelect
        data={data}
        isSingle={false}
        checkboxType="circle"
        placeholder="这是一个圆形的勾选框"
      />
    </div>
  );
}

export default App;
```

### 树状数据

在树状节点中，除了`value`属性存储节点值和`label`属性设置节点显示文本外，还可以传入节点相关的其他属性来控制树状选择器的行为样式。`unfold`设置一个节点是否被默认选中,`defaultSelected`是否被默认展开。

```jsx
import { TreeSelect } from 'triangle-ui-react';

const data = [
  {
    value: 1,
    label: 'Parent 1',
    unfold: true,
    children: [
      {
        value: 11,
        label: 'Parent 1-0',
        unfold: true,
        defaultSelected: true,
        children: [
          {
            value: 111,
            label: 'leaf 1',
            defaultSelected: true,
          },
          {
            value: 112,
            label: 'leaf 2',
          },
        ],
      },
      {
        value: 12,
        label: 'Parent 1-1',
      },
    ],
  },
  {
    value: 2,
    label: 'Parent 2',
  },
];

export default function App() {
  return (
    <div>
      <TreeSelect
        data={data}
        isSingle={false}
        checkboxType="circle"
        placeholder="这是一个圆形的勾选框"
      />
    </div>
  );
}

export default App;
```

### 选择菜单

可以让一个选择菜单默认为展开的样式。

```jsx
import { TreeSelect } from 'triangle-ui-react';

const data = [
  {
    value: 1,
    label: 'Parent 1',
    children: [
      {
        value: 11,
        label: 'Parent 1-0',
        defaultSelected: true,
        children: [
          {
            value: 111,
            label: 'leaf 1',
            defaultSelected: true,
          },
          {
            value: 112,
            label: 'leaf 2',
          },
        ],
      },
      {
        value: 12,
        label: 'Parent 1-1',
      },
    ],
  },
  {
    value: 2,
    label: 'Parent 2',
  },
];

export default function App() {
  return (
    <div>
      <TreeSelect
        data={data}
        isSingle={false}
        displaySelect={true}
        checkboxType="circle"
        placeholder="这是一个圆形的勾选框"
      />
    </div>
  );
}

export default App;
```

同时，可以设置菜单的展开位置，默认为向下，但也可以让其在其他位置呈现。

```jsx
import { TreeSelect } from 'triangle-ui-react';

const data = [
  {
    value: 1,
    label: 'Parent 1',
    children: [
      {
        value: 11,
        label: 'Parent 1-0',
        defaultSelected: true,
        children: [
          {
            value: 111,
            label: 'leaf 1',
            defaultSelected: true,
          },
          {
            value: 112,
            label: 'leaf 2',
          },
        ],
      },
      {
        value: 12,
        label: 'Parent 1-1',
      },
    ],
  },
  {
    value: 2,
    label: 'Parent 2',
  },
];

export default function App() {
  return (
    <div>
      <TreeSelect
        data={data}
        isSingle={false}
        displaySelect={true}
        checkboxType="circle"
        dropDownPosition="rightBottom"
        placeholder="这是一个圆形的勾选框"
      />
    </div>
  );
}

export default App;
```

### 输入框

有些使用场景中，不需要输入框，仅仅需要一个选择菜单，这时选择的节点也会通过回调函数返回。  

```jsx
import { TreeSelect } from 'triangle-ui-react';

const data = [
  {
    value: 1,
    label: 'Parent 1',
    unfold: true,
    children: [
      {
        value: 11,
        label: 'Parent 1-0',
        defaultSelected: true,
        unfold: true,
        children: [
          {
            value: 111,
            label: 'leaf 1',
            defaultSelected: true,
          },
          {
            value: 112,
            label: 'leaf 2',
          },
        ],
      },
      {
        value: 12,
        label: 'Parent 1-1',
      },
    ],
  },
  {
    value: 2,
    label: 'Parent 2',
  },
];

export default function App() {
  return (
    <div>
      <TreeSelect
        data={data}
        isSingle={false}
        needInput={false}
        checkboxType="circle"
      />
    </div>
  );
}

export default App;
```

### 大小

输入不同的长宽，让选择菜单呈现不同的大小。

```jsx
import { TreeSelect } from 'triangle-ui-react';

const data = [
  {
    value: 1,
    label: 'Parent 1',
    unfold: true,
    children: [
      {
        value: 11,
        label: 'Parent 1-0',
        defaultSelected: true,
        children: [
          {
            value: 111,
            label: 'leaf 1',
            defaultSelected: true,
          },
          {
            value: 112,
            label: 'leaf 2',
          },
        ],
      },
      {
        value: 12,
        label: 'Parent 1-1',
      },
    ],
  },
  {
    value: 2,
    label: 'Parent 2',
  },
];

export default function App() {
  return (
    <div>
      <TreeSelect
        data={data}
        isSingle={false}
        needInput={false}
        inputWidth={250}
        checkboxType="circle"
      />
    </div>
  );
}

export default App;
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :---: | :---: | :---: | :---: | :---: |
| data | 树结构数据 | `Array<TreeNode<T>>` | - | - |
| data.value | 节点的真值 | `T` | - | - |
| data.label | 节点的显示值 | `string` | - | - |
| data.children | 子节点 | `Array<TreeNode<T>>` | - | - |
| data.unfold | 是否默认展开 | `boolean` | `true`or`false` | `false` |
| data.defaultSelected | 节点是否默认选中 | `boolean` | `true`or`false` | `false` |
| isSingle | 是否为单选 | `boolean` | `true`or`false` | `true` |
| checkable | 节点是否可选 | `boolean` | `true`or`false` | `true` |
| expandable | 是否开启展开箭头 | `boolean` | `true`or`false` | `true` |
| checkboxType | 勾选框样式 | `selectType` | `box`、`circle` | `box` |
| inputWidth | 勾选框与选择菜单宽度 | `string` | - | - |
| inputHeight | 选择菜单高度 | `string` | - | - |
| displaySelect | 是否默认打开选择菜单 | `boolean` | `true`or`false` | `false` |
| placeholder | 输入框占位符 | `string` | - | - |
| needInput | 是否显示输入框 | `boolean` | `true`or`false` | `true` |
| dropDownPosition | 选择菜单位置 | `string` | `bottom`、`leftBottom`、`rightBottom` | `bottom` |
| onSelect | 选择回调 | `(selected: Array<TreeNode<T>>) => void` | - | - |
| onExpand | 展开回调 | `(expanded: Set<T>) => void` | - | - |
