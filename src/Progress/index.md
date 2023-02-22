---
group:
  title: 数据展示
toc: content
---

# Progress

进度条能够实时反应文件传输情况

## 使用示例

### 默认

加载进度条时，可以通过设置`percent`属性来设置进度条的进度。进度条的进度以百分比的形式展示。

```jsx
import React, { useState, useEffect } from 'react';
import { Button } from 'triangle-ui-react';
import { Progress } from 'triangle-ui-react';

let start: boolean = false;

export default function App() {
  const [percent, setPercent] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    start = true;
    setTimeout(() => {
      setPercent((prevPercent) => prevPercent + 10);
    }, 500);
  };

  useEffect(() => {
    if (start === false) {
      return;
    }
    if (percent === 100) {
      return;
    } else {
      setTimeout(() => {
        setPercent((prevPercent) => prevPercent + 10);
      }, 500);
    }
  }, [percent]);

  return (
    <div>
      <Progress percent={percent} />
      <Button
        disabled={isClicked}
        style={{ marginTop: 5 + 'px' }}
        size="sm"
        btnType="primary"
        onClick={()=>{
          handleButtonClick();
          setIsClicked(true);
        }}
      >
        Start
      </Button>
    </div>
  );
}
```

### 自定义颜色和高度

展示一个绿色（success）的进度条，高度为20px，进度为70%。

```jsx
import React, { useState, useEffect } from 'react';
import { Button } from 'triangle-ui-react';
import { Progress } from 'triangle-ui-react';

export default function App() {

  return (
    <div>
      <Progress percent={70} strokeHeight={20} theme="success" />
    </div>
  );
}
```

### 不展示文字

展示一个默认高度的进度条，进度为90%，但是不展示文字。

```jsx
import React, { useState, useEffect } from 'react';
import { Button } from 'triangle-ui-react';
import { Progress } from 'triangle-ui-react';

export default function App() {

  return (
    <div>
      <Progress percent={90} showText={false} theme="danger"/>
    </div>
  );
}
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| percent | 进度条的进度 | number | - |
| strokeHeight | 进度条的高度 | number | 15 |
| showText | 是否展示进度条的文字 | boolean | true |
| style | 进度条的样式 | React.CSSProperties | - |
| theme | 进度条的主题 | ThemeProps | primary |
