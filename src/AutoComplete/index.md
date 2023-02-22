---
group:
  title: 数据输入
toc: content
---

# AutoComplete

自动完成。用于帮助用户快速完成输入。

## 基本的数据源

下面展示了如何使用AutoComplete组件。在这个例子中，数据源是一个由水果组成的数组。使用者可以在输入框中输入任何水果的名称，输入框将返回与用户输入匹配的水果名称。在输入框中选择了一个选项后，页面会显示所选水果的名称。

```tsx
import React, { useState } from 'react';
import { AutoComplete } from 'triangle-ui-react';

const fruits = [
  { value: 'Apple' },
  { value: 'Banana' },
  { value: 'Orange' },
  { value: 'Grape' },
  { value: 'Mango' },
  { value: 'Pear' },
  { value: 'Pineapple' },
  { value: 'Watermelon' },
  { value: 'Kiwi' },
];

export default function App() {
  const [selectedFruit, setSelectedFruit] = useState('');

  const handleSelectFruit = (fruit) => {
    setSelectedFruit(fruit.value);
  };

  return (
    <div>
      <AutoComplete
        fetchSuggestions={(value) => {
          const inputValue = value.trim().toLowerCase();
          const inputLength = inputValue.length;
          return inputLength === 0
            ? []
            : fruits.filter(
                (fruit) =>
                  fruit.value.toLowerCase().slice(0, inputLength) ===
                  inputValue
              );
        }}
        onSelect={handleSelectFruit}
        placeholder="请输入水果"
      />
      <p>你的选择是: {selectedFruit}</p>
    </div>
  );
};
```

## 异步数据源

下面展示了如何从异步数据源中获取数据。在这个例子中，数据源是一个基于 `Fetch API` 的异步调用。当用户输入框中输入城市名称时，输入框会返回匹配的城市名称。在输入框中选择了一个选项后，页面会显示所选城市的名称。注：这里使用的测试 api 可能无法查询到中文城市名称。因此你可以输入 `a` `b` `c` 等字母来测试。

```tsx
import React, { useState } from 'react';
import { AutoComplete } from 'triangle-ui-react';

export default function App() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleSelectCity = (city) => {
    setSelectedCity(city.value);
  };

  return (
    <div>
      <AutoComplete
        fetchSuggestions={(value) =>
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => data.filter(item => item.username.toLowerCase().includes(value.toLowerCase())))
            .then((data) => data.map((item) => ({ value: item.username })))
        }
        onSelect={handleSelectCity}
        placeholder="请输入一个城市"
      />
      <p>你的选择是: {selectedCity}</p>
    </div>
  );
};

```

## 自定义下拉列表

下面展示了如何自定义下拉列表。在这个例子中，数据源是一个由水果组成的数组。使用者可以在输入框中输入任何水果的名称，输入框将返回与用户输入匹配的水果名称。在下拉列表中，每个选项都被渲染成一个带有“水果：”前缀的div元素。在输入框中选择了一个选项后，页面会显示所选水果的名称。

```tsx
import React, { useState } from 'react';
import { AutoComplete } from 'triangle-ui-react';

const fruits = [
  { value: 'Apple' },
  { value: 'Banana' },
  { value: 'Orange' },
  { value: 'Grape' },
  { value: 'Mango' },
  { value: 'Pear' },
  { value: 'Pineapple' },
  { value: 'Watermelon' },
  { value: 'Kiwi' },
];

export default function App() {
  const [selectedFruit, setSelectedFruit] = useState('');

  const handleSelect = (item) => {
    setSelectedFruit(item);
  };

  return (
    <div className="App">
      <AutoComplete
        placeholder="请输入水果"
        fetchSuggestions={(query) => {
          return fruits.filter((fruit) =>
            fruit.value.toLowerCase().includes(query.toLowerCase())
          );
        }}
        onSelect={handleSelect}
        renderOption={(item) => <div>水果：{item.value}</div>}
      />
      <p>你的选择是: {selectedFruit.value}</p>
    </div>
  );
}

```

## API

| 参数 | 说明 | 可用值 | 默认值 |
| :---: | :----: | :---: | :---: |
| fetchSuggestions | 用于获取数据的函数 | (str: string) => DataSourceType[] Promise<DataSourceType[]> | - |
| onSelect | 选中选项时触发的回调函数 | (item: DataSourceType) => void | - |
| placeholder | 输入框的占位符 | string | - |
| renderOption | 用于渲染下拉列表中每个选项的函数 | (item: DataSourceType) => ReactElement | - |
| size | 输入框大小 | `lg` `sm` | `sm` |
