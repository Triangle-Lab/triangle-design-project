import React from 'react'
import Drawer, { DrawerPosition } from '../../../../src/components/Drawer/drawer'
import ShowBar from '../ShowBar'
import Button, { ButtonType } from '../../../../src/components/Button/button'
import '../../../../src/styles/doc.scss'

export function DrawerDeault (): JSX.Element {
  const [left, setLeft] = React.useState(false)
  const [right, setRight] = React.useState(false)
  return (
    <ShowBar>
      <Button btnType={ButtonType.Primary} onClick={() => {
        setLeft(!left)
      }}>{left ? 'Close Left Drawer' : 'Open Left Drawer'}</Button>
      <Button btnType={ButtonType.Primary} onClick={() => {
        setRight(!right)
      }}>{right ? 'Close Right Drawer' : 'Open Right Drawer'}</Button>
      <Drawer title="左抽屉" isShow={left} onClose={() => { setLeft(false) }} position={DrawerPosition.Left} width={300} close={true} mask={true} maskClosable={true}>
        <div>抽屉内容</div>
      </Drawer>
      <Drawer title="右抽屉" isShow={right} onClose={() => { setRight(false) }} position={DrawerPosition.Right} width={300} close={true} mask={true} maskClosable={true}>
        <div>抽屉内容</div>
      </Drawer>
    </ShowBar>
  )
}

export function DrawerWith (): JSX.Element {
  const [visible, setVisible] = React.useState(false)
  return (
    <ShowBar>
      <Button btnType={ButtonType.Primary} onClick={() => {
        setVisible(!visible)
      }}>{visible ? 'Close Drawer' : 'Open Drawer'}</Button>

      <Drawer title="抽屉" isShow={visible} width={500} onClose={() => { setVisible(false) }} position={DrawerPosition.Left}>
        <div>抽屉宽度为 500</div>
      </Drawer>
    </ShowBar>
  )
}

export function DrawerMask (): JSX.Element {
  const [noMask, setNoMask] = React.useState(false)
  const [noMaskClosable, setNoMaskClosable] = React.useState(false)
  return (
    <ShowBar>
      <Button btnType={ButtonType.Primary} onClick={() => {
        setNoMask(!noMask)
      }
      }>{noMask ? 'Close Drawer Without Mask' : 'Open Drawer Without Mask'}</Button>
      <Button btnType={ButtonType.Primary} onClick={() => {
        setNoMaskClosable(!noMaskClosable)
      }
      }>{noMaskClosable ? 'Close Drawer Without MaskClosable' : 'Open Drawer Without MaskClosable'}</Button>

      <Drawer title="抽屉" isShow={noMask} onClose={() => { setNoMask(false) }} position={DrawerPosition.Left} mask={false}>
        <div>没有遮罩</div>
      </Drawer>

      <Drawer title="抽屉" isShow={noMaskClosable} onClose={() => { setNoMaskClosable(false) }} position={DrawerPosition.Left} mask={true} maskClosable={false}>
        <div>点击遮罩不可关闭抽屉</div>
      </Drawer>

    </ShowBar>
  )
}

export function DrawerHead (): JSX.Element {
  const [visible1, setVisible1] = React.useState(false)
  const [visible2, setVisible2] = React.useState(false)
  return (
    <ShowBar>
      <Button btnType={ButtonType.Primary} onClick={() => {
        setVisible1(!visible1)
      }}>{visible1 ? 'Close Drawer Without Close Button' : 'Open Drawer Without Close Button'}</Button>

      <Button btnType={ButtonType.Primary} onClick={() => {
        setVisible2(!visible2)
      }}>{visible2 ? 'Close Drawer With Extra Head Content' : 'Open Drawer With Extra Head Content'}</Button>

      <Drawer title="抽屉" isShow={visible1} onClose={() => { setVisible1(false) }} position={DrawerPosition.Left} close={false}>
        <div>没有关闭按钮</div>
      </Drawer>

      {/* 额外内容 */}
      <Drawer title="抽屉" isShow={visible2} onClose={() => { setVisible2(false) }} position={DrawerPosition.Left} extra={<Button btnType={ButtonType.Primary}>额外内容</Button>}>
        <div>抽屉内容</div>
      </Drawer>

    </ShowBar>
  )
}
