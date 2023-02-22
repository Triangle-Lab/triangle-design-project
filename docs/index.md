---
hero:
  title: Triangle-ui
  description: A beautiful and intuitive component library for React.
  actions:
    - text: 快速上手
      link: /components/Alert
---


```jsx
import React from 'react'
import { Alert, AlertType, Button, ButtonType} from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <div style={{width:"100%"}}>
      <div style={{display:"flex"}}>
        <Alert title="默认提示" description="这是一条默认提示"  />
        <Button style={{marginLeft:"1rem",marginTop:".1rem"}}>Hello</Button>
        <Button style={{marginLeft:"1rem",marginTop:".1rem"}} btnType={ButtonType.Primary}>
          @Triangle
        </Button>
      </div>
    </div>
  )
}
```
