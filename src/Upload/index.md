---
toc: content
---

# Upload

Upload 组件可以让用户上传文件。

## 使用示例

### 默认

点击按钮上传文件。

```tsx
import React, { useState } from 'react'
import { Upload , UploadFile} from '.'
import { Button } from 'triangle-ui'
import { Icon } from 'triangle-ui'

export default function App() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleUpload = (file: UploadFile) => {
    setFileList(prevList => [...prevList, file]);
  };
  const handleRemove = (file: UploadFile) => {
    setFileList(prevList => prevList.filter(item => item.uid !== file.uid));
  };
  return (
    <div style={{width: 400+"px" }}>
      <Upload
        action="https://reqres.in/api/users"
        defaultFileList={fileList}
        multiple={true}
        onProgress={file => {
          const updatedFile = { ...file, percent: file.percent! };
          handleUpload(updatedFile);
        }}
        onSuccess={(response, file) => {
          const updatedFile = { ...file, status: 'success', response };
          handleUpload(updatedFile);
        }}
        onError={(error, file) => {
          const updatedFile = { ...file, status: 'error', error };
          handleUpload(updatedFile);
        }}
        onRemove={handleRemove}
      >
        <Button btnType="primary" size="sm">
          <Icon icon="upload"  style={{marginRight: "0.5rem"}}/>
          Click to upload
        </Button>
      </Upload>
    </div>
  );
}
```

### 多文件上传

UpLoad 组件可以一个文件一个文件的上传，也可以一次性上传多个文件。

```jsx
import React, { useState } from 'react'
import { Upload , UploadFile} from '.'
import { Button } from 'triangle-ui'
import { Icon } from 'triangle-ui'

export default function App() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleUpload = (file: UploadFile) => {
    setFileList(prevList => [...prevList, file]);
  };
  const handleRemove = (file: UploadFile) => {
    setFileList(prevList => prevList.filter(item => item.uid !== file.uid));
  };
  return (
    <div style={{width: 400+"px" }}>
      <Upload
        action="https://reqres.in/api/users"
        defaultFileList={fileList}
        multiple={true}
        onProgress={file => {
          const updatedFile = { ...file, percent: file.percent! };
          handleUpload(updatedFile);
        }}
        onSuccess={(response, file) => {
          const updatedFile = { ...file, status: 'success', response };
          handleUpload(updatedFile);
        }}
        onError={(error, file) => {
          const updatedFile = { ...file, status: 'error', error };
          handleUpload(updatedFile);
        }}
        onRemove={handleRemove}
      >
        <Button btnType="primary" size="sm">
          <Icon icon="upload"  style={{marginRight: "0.5rem"}}/>
          Click to upload
        </Button>
      </Upload>
    </div>
  );
}
```

### 拖拽上传

Upload 组件可以通过设置 drag 属性为 true 来实现拖拽上传功能。

```jsx
import React, { useState } from 'react'
import { Upload , UploadFile} from '.'
import { Button } from 'triangle-ui'
import { Icon } from 'triangle-ui'

export default function App() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleUpload = (file: UploadFile) => {
    setFileList(prevList => [...prevList, file]);
  };
  const handleRemove = (file: UploadFile) => {
    setFileList(prevList => prevList.filter(item => item.uid !== file.uid));
  };
  return (
    <div  style={{width: 400+"px" }}>
      <Upload
        action="https://reqres.in/api/users"
        defaultFileList={fileList}
        onProgress={file => {
          const updatedFile = { ...file, percent: file.percent! };
          handleUpload(updatedFile);
        }}
        onSuccess={(response, file) => {
          const updatedFile = { ...file, status: 'success', response };
          handleUpload(updatedFile);
        }}
        onError={(error, file) => {
          const updatedFile = { ...file, status: 'error', error };
          handleUpload(updatedFile);
        }}
        onRemove={handleRemove}
        drag={true}
      >
        <div>Click or Drag file to this area to upload</div>
      </Upload>
    </div>
  );
}
```

### 预设文件列表

Upload 组件可以设置预设文件列表。

```tsx
import React, { useState } from 'react'
import { Upload , UploadFile} from '.'
import { Button } from 'triangle-ui'
import { Icon } from 'triangle-ui'

const fileList = [
  {
    uid: '1',
    name: 'file1.png',
    size: 1024,
    status: 'success',
    response: { status: 'success' },
  },
  {
    uid: '2',
    name: 'file2.png',
    size: 2048,
    status: 'success',
    response: { status: 'success' },
  },
];

export default function App() {
  return (
    <div style={{ width: 400 + 'px' }}>
      <Upload action="https://reqres.in/api/users" defaultFileList={fileList}>
        <Button btnType="primary" size="sm">
          <Icon icon="upload"  style={{marginRight: "0.5rem"}}/>
          Click to upload
        </Button>
      </Upload>
    </div>
  );
}
```

### 限制上传文件类型和大小

Upload 组件可以限制上传文件类型和大小。在下面的例子中，我们限制了上传文件的类型必须是 jpg 或 png，大小必须小于 2MB。

```tsx
import React, { useState } from 'react'
import { Upload , UploadFile} from '.'
import { Button } from 'triangle-ui'
import { Icon } from 'triangle-ui'

export default function App() {
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      alert('只能上传 JPG/PNG 格式的文件')
      return false
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      alert('上传文件必须小于 2MB')
      return false
    }
    return true
  }

  return (
    <div style={{ width: 400 + 'px' }}>
      <Upload
        action="https://reqres.in/api/users"
        beforeUpload={beforeUpload}
      >
        <Button btnType="primary" size="sm">
          <Icon icon="upload"  style={{marginRight: "0.5rem"}}/>
          Click to upload
        </Button>
      </Upload>
    </div>
  )
}
```

### 设置上传的请求头

Upload 组件可以设置上传的请求头。在下面的例子中，我们设置了请求头的 X-Custom-Header 字段。

```tsx
import React, { useState } from 'react'
import { Upload , UploadFile} from '.'
import { Button } from 'triangle-ui'
import { Icon } from 'triangle-ui'

export default function App() {
  const headers = {
    'X-Requested-With': null,
    'X-Custom-Header': 'foobar',
  };

  return (
    <div style={{ width: 400 + 'px' }}>
      <Upload
        action="https://reqres.in/api/users"
        headers={headers}
      >
        <Button btnType="primary" size="sm">
          <Icon icon="upload" style={{marginRight: "0.5rem"}}/>
          Click to upload
        </Button>
      </Upload>
    </div>
  )
}
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| action | 必选参数，上传的地址 | string | - |
| defaultFileList | 默认已经上传的文件列表 | UploadFile[] | - |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。 | (file: File) => boolean | - |
| onProgress | 文件上传时的钩子，返回文件上传的进度百分比 | (percentage: number, file: File) => void | - |
| onSuccess | 文件上传成功时的钩子 | (data: any, file: File) => void | - |
| onError | 文件上传失败时的钩子 | (err: any, file: File) => void | - |
| onChange | 文件状态改变时的钩子，上传成功或者失败时都会被调用 | (file: File) => void | - |
| onRemove | 文件列表移除文件时的钩子 | (file: UploadFile) => void | - |
| headers | 设置上传的请求头部 | {[key: string]: any } | - |
| name | 上传的文件字段名 | string | 'file' |
| data | 上传时附带的额外参数 | {[key: string]: any } | - |
| withCredentials | 支持发送 cookie 凭证信息 | boolean | false |
| accept | 接受上传的文件类型 | string | - |
| multiple | 是否支持多选文件 | boolean | false |
| drag | 是否支持拖拽上传 | boolean | false |
