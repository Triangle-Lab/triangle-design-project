import React from 'react'
import Button, { ButtonType } from '@site/../src/components/Button/button'
import Dropdown from '../../../../src/components/Dropdown/dropdown'
import '../../../../src/styles/doc.scss'

function DropdownBar (): JSX.Element {
  return (
    <Dropdown droplist={[<div key="1">option1</div>, <div key="2">option2</div>, <div key="3">option3</div>]}>
      <Button btnType={ButtonType.Primary}>开始</Button>
    </Dropdown>
  )
}

export default DropdownBar
