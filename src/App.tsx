import React from 'react'
import Alert, { AlertType } from './components/Alert/alert'
import Button, { ButtonSize, ButtonType } from './components/Button/button'

function App (): JSX.Element {
  return (
    <div className="App" style={{ margin: '10px' }}>
      <Button>Hello</Button>
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} style={{ margin: '10px' }} size={ButtonSize.Large}>快速开始</Button>
      <Button btnType={ButtonType.Success}>开始</Button>
      <Button btnType={ButtonType.Secondary} size={ButtonSize.Small}>快速开始</Button>
      <Button btnType={ButtonType.Success} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
      <Button btnType={ButtonType.Outline}>outline</Button>
      <Button btnType={ButtonType.Default} style={{ fontWeight: '1000' }}>尝试</Button>
      <Button btnType={ButtonType.Link} href="http://www.bing.com">Baidu Link</Button>
      <Button btnType={ButtonType.Link} href="http://www.bing.com" disabled>Baidu Link</Button>
      <Alert title="成功警告" description="这是一条成功警告" position={'left'} alertType={AlertType.Success} />
    </div>
  )
}

export default App
