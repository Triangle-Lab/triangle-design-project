import React from 'react'
import { Alert, AlertType } from 'triangle-ui'

export default function App (): JSX.Element {
  return (
    <Alert title="成功警告" description="这是一条成功警告" position={'left'} alertType={AlertType.Success} />
  )
}
