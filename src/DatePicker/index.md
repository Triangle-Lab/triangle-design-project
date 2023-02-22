---
group:
  title: 数据输入
toc: content
---

# DatePicker

用于选择日期。  

## 使用示例

### 基础用法

`DatePicker` 组件可以让用户选择日期。可以通过 `onChange` 事件来获取用户选择的日期。该函数携带一个参数，类型为 `selectedDateType`，包含 `year`、`month`、`day` 三个属性。**点击头部的年份或月份可以切换年份或月份选择器**。

```jsx
import React,{useState} from 'react'
import { DatePicker,selectedDateType } from 'triangle-ui-react'

export default function App() {
  const now = new Date()
  const [date, setDate] = useState<selectedDateType>({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  });
  return (
    <div>
      {date && <div>当前选择的是 {date.year} 年 {date.month} 月 {date.day} 日</div>}
      <br/>
      <DatePicker onChange={(date)=>{
        setDate(date)
      }} 
    />
    </div>
  );
};
```

### 语言

`DatePicker` 组件可以通过 `en` 属性来设置语言，目前支持中文和英文。默认为中文。

```jsx
import React,{useState} from 'react'
import { DatePicker,selectedDateType } from 'triangle-ui-react'

export default function App() {
  const now = new Date()
  const [date, setDate] = useState<selectedDateType>({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  });
  return (
    <div>
      {date && <div>Current date is {date.year} - {date.month} - {date.day}</div>}
      <br/>
      <DatePicker en onChange={(date)=>{
        setDate(date)
      }} 
    />
    </div>
  );
};
```

### 不可选取的日期

`DatePicker` 组件可以通过 `disabledDateRange` 属性来设置不可选取的日期范围。该属性接受一个对象，包含 `start` 和 `end` 两个属性，分别表示不可选取的日期范围的开始和结束。`start` 和 `end` 的类型为 `selectedDateType`，包含 `year`、`month`、`day` 三个属性。

```jsx
import React,{useState} from 'react'
import { DatePicker,selectedDateType } from 'triangle-ui-react'

export default function App() {
  const now = new Date()
  const [date, setDate] = useState<selectedDateType>({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  });
  return (
    <div>
      {date && <div>Current date is {date.year} - {date.month} - {date.day}</div>}
      <br/>
      <DatePicker 
        onChange={(date)=>{
        setDate(date)
      }} 
        disabledDateRange={
          {
            start: {
              year: 2023,
              month: 2,
              day: 18
            },
            end: {
              year: 2023,
              month: 3,
              day: 1
            }
          }
        }
    />
    </div>
  );
};
```

你也可以把开始和结束设置为同一天，这样就可以禁止用户选择某一天。  

```jsx
import React,{useState} from 'react'
import { DatePicker,selectedDateType } from 'triangle-ui-react'

export default function App() {
  const now = new Date()
  const [date, setDate] = useState<selectedDateType>({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  });
  return (
    <div>
      {date && <div>Current date is {date.year} - {date.month} - {date.day}</div>}
      <br/>
      <DatePicker 
        onChange={(date)=>{
        setDate(date)
      }} 
        disabledDateRange={
          {
            start: {
              year: 2023,
              month: 2,
              day: 18
            },
            end: {
              year: 2023,
              month: 2,
              day: 18
            }
          }
        }
    />
    </div>
  );
};
```

### 日期范围选择器

使用 `RangeDatePicker` 组件可以让用户选择日期范围。

```jsx
import React, {useState} from 'react'
import { RangeDatePicker, selectedDateRangeType } from 'triangle-ui-react'

export default function App() {
  const now = new Date()
  const [date, setDate] = useState<selectedDateRangeType>({
    start: {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    },
    end: {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    }
  });
  return (
    <div>
      {date && <div>当前选择的是 {date.start.year} 年 {date.start.month} 月 {date.start.day} 日 至 {date.end.year} 年 {date.end.month} 月 {date.end.day} 日</div>}
      <br/>
      <RangeDatePicker onChange={(date)=>{
        setDate(date)
      }} 
    />
    </div>
  );
};
```

当然，`RangeDatePicker` 组件也可以通过 `disabledDateRange` 属性来设置不可选取的日期范围。例如：

```jsx
import React, {useState} from 'react'
import { RangeDatePicker, selectedDateRangeType } from 'triangle-ui-react'

export default function App() {
  const now = new Date()
  const [date, setDate] = useState<selectedDateRangeType>({
    start: {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    },
    end: {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    }
  });
  return (
    <div>
      {date && <div>当前选择的是 {date.start.year} 年 {date.start.month} 月 {date.start.day} 日 至 {date.end.year} 年 {date.end.month} 月 {date.end.day} 日</div>}
      <br/>
      <RangeDatePicker onChange={(date)=>{
        setDate(date)
      }} 
        disabledDateRange={
          {
            start: {
              year: 2023,
              month: 2,
              day: 18
            },
            end: {
              year: 2023,
              month: 3,
              day: 1
            }
          }
        }
    />
    </div>
  );
};
```

## API

### DatePicker

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| onChange | 选择日期后的回调函数 | `(date: selectedDateType) => void` | - | - |
| en | 是否为英文 | boolean | - | false |
| disabledDateRange | 不可选取的日期范围 | `{start: selectedDateType, end: selectedDateType}` | - | - |

### RangeDatePicker

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| onChange | 选择日期后的回调函数 | `(date: selectedDateType) => void` | - | - |
| en | 是否为英文 | boolean | - | false |
| disabledDateRange | 不可选取的日期范围 | `{start: selectedDateType, end: selectedDateType}` | - | - |

### 类型定义

`selectedDateType` 类型定义如下：

```typescript
export type selectedDateType = {
  year: number,
  month: number,
  day: number
}
```

`selectedDateRangeType` 类型定义如下：

```typescript
export type selectedDateRangeType = {
  start: selectedDateType,
  end: selectedDateType
}
```
